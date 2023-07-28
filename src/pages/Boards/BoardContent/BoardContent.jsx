import Box from "@mui/material/Box";
import React from "react";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sorts";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  PointerSensor,
  DragOverlay,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import { useState } from "react";
import { useEffect } from "react";
import { arrayMove } from "@dnd-kit/sortable";

import Column from "./ListColumns/Column/Column";
import Cards from "./ListColumns/Column/ListCards/Card/Card";

import { cloneDeep } from "lodash";

const ACTIVE_DRAG_ITEM = {
  COLUMN: "ACTIVE_DRAG_ITEM_COLUMN",
  CARD: "ACTIVE_DRAG_ITEM_CARD",
};

function BoardContent({ board }) {
  const [orderedUpdateColumns, setOrderedUpdateColumns] = useState([]);

  // console.log(orderedUpdateColumns, "orderedUpdateColumns");
  //  cung 1 thoi diem chi keo dc 1 phan tu
  const [activeDragItemID, setactiveDragItemID] = useState(null);
  const [activeDragItemType, setactiveDragItemType] = useState(null);
  const [activeDragItemData, setactiveDragItemData] = useState(null);

  //sensor dnd, di chuyen chuot 10px de kich hoat event
  const pointerSensor = useSensor(PointerSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });

  // toi uu performation khi keo tha bang chuot
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  /// toi uu performation khi keo tha tren mobile
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });

  const sensor = useSensors(mouseSensor, touchSensor);

  useEffect(() => {
    const orderedColumns = mapOrder(
      board?.columns,
      board?.columnOrderIds,
      "_id"
    );
    setOrderedUpdateColumns(orderedColumns);
  }, [board]);

  //khi bat dauu keo (drag)
  const handleDragStart = (e) => {
    // console.log(e, "handleDragStart");
    setactiveDragItemID(e?.active?.id);
    setactiveDragItemType(
      e?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM.CARD
        : ACTIVE_DRAG_ITEM.COLUMN
    );
    setactiveDragItemData(e?.active?.data?.current);
  };
  // console.log(activeDragItemID, "activeDragItemID");
  // console.log(activeDragItemType, "activeDragItemType");
  // console.log(activeDragItemData, "activeDragItemData");

  //animation khi tha drop phan tu
  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };

  //tìm 1 cái column theo cardId
  const findColumnByCardId = (cardId) => {
    //nên dùng c.cards thay vì dùng c.cardOderIds bởi vì ở handleDragOver sẽ làm cho dữ liệu cho card hoàn chỉnh trước rồi mới tạo ra cardOrderIds mới
    return orderedUpdateColumns.find((column) =>
      column.cards.map((card) => card._id).includes(cardId)
    );
  };

  //trigger trong qua trinh keo (drag) 1 phan tu
  const handleDragOver = (e) => {
    //neu keo column thi k return k lam gi ca
    if (activeDragItemType === ACTIVE_DRAG_ITEM.COLUMN) return;

    // console.log("handle drag over", e);
    //card
    const { active, over } = e;

    // kiem tra neu over = null thi return
    if (!active || !over) return;

    //activeDraggingCard : là cái card đang đc kéo
    const {
      id: activeDraggingCardId,
      data: { current: activeDraggingCardData },
    } = active;
    //overCard: là cái card đang tương tác trên hoặc dưới cái card đang được kéo
    const { id: overCardId } = over;

    // tìm 2 cái columns theo cardId
    const activeColumn = findColumnByCardId(activeDraggingCardId);
    const overColumn = findColumnByCardId(overCardId);

    //kiem tra neu k ton tai 1 trong 2 columns thi return
    if (!activeColumn || !overColumn) return;

    //khi kéo qua 2 column khác nhau , còn kéo kéo trong column chính nó thì k làm gì cả
    if (activeColumn._id !== overColumn._id) {
      setOrderedUpdateColumns((prevColumn) => {
        //tìm vị trí index của overCard trong column đích ( nơi activeCard sắp dc thả)
        const overCardIndex = overColumn?.cards.findIndex(
          (card) => card._id === overCardId
        );

        let newCardIndex;

        const isBelowOverItem =
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;

        const modifier = isBelowOverItem ? 1 : 0;

        newCardIndex =
          overCardIndex >= 0
            ? overCardIndex + modifier
            : overColumn?.cards?.length + 1;

        // clone mang orderdColumnState cu ra 1 mang moi de xu ly data roi return - update lai
        const nextColumn = cloneDeep(prevColumn);
        const nextActiveColumn = nextColumn.find(
          (column) => column._id === activeColumn._id
        );
        const nextOverColumn = nextColumn.find(
          (column) => column._id === overColumn._id
        );

        //Column cũ
        if (nextActiveColumn) {
          //xóa card ở column active
          nextActiveColumn.cards = nextActiveColumn.cards.filter(
            (card) => card._id !== activeDragItemID
          );

          //cập nhật lại mảng cardOrderIds cho chuẩn dữ liệu
          nextActiveColumn.cardId = nextActiveColumn.cards.map(
            (card) => card._id
          );
        }

        //Column mới
        if (nextOverColumn) {
          //kiem tra xem card dang keo no co ton tai o overColumn chua, neu co thi can xoa no di truoc
          nextOverColumn.cards = nextOverColumn.cards.filter(
            (card) => card._id !== activeDragItemID
          );

          //tiep theo la them card dang keo vao overColumn theo vi tri index moi
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(
            newCardIndex,
            0,
            activeDragItemData
          );
          //cập nhật lại mảng cardOrderIds cho chuẩn dữ liệu
          nextOverColumn.cardId = nextOverColumn.cards.map((card) => card._id);
        }

        console.log("nextColumn", nextColumn);
        return nextColumn;
      });
    }
  };

  //khi ket thuc tha (drop)
  const handleDragEnd = (e) => {
    console.log(e, "handle dragend");

    if (activeDragItemType === ACTIVE_DRAG_ITEM.CARD) {
      // console.log("tam thoi keo tha card k lam gi ca");
      return;
    }

    const { active, over } = e;

    // kiem tra neu over = null thi return
    if (!active || !over) return;

    //vi tri sau khi keo tha
    if (active.id !== over.id) {
      // lay vi tri cu (tu thang active)
      const oldIndex = orderedUpdateColumns.findIndex(
        (a) => a._id === active.id
      );
      // lay vi tri moi (tu thang over)
      const newIndex = orderedUpdateColumns.findIndex((a) => a._id === over.id);

      //array move cua dnd-kit sap xep mang columns ban dau
      const dndOrderUpdate = arrayMove(
        orderedUpdateColumns,
        oldIndex,
        newIndex
      );

      //orther call api update database
      // const dndOrderUpdateColumnIds = dndOrderUpdate.map((c) => c._id);
      // console.log("dndOrderUpdateColumnIds", dndOrderUpdateColumnIds);
      setOrderedUpdateColumns(dndOrderUpdate);
    }

    //
    setactiveDragItemID(null);
    setactiveDragItemType(null);
    setactiveDragItemData(null);
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      sensors={sensor}
    >
      <Box
        sx={{
          bgcolor: (theme) => {
            return theme.palette.mode === "dark" ? "#34495e" : "#1976d2";
          },
          width: "100%",
          height: (theme) => {
            return theme.trello.boardContentHeight;
          },
        }}
      >
        <ListColumns columns={orderedUpdateColumns} />
        <DragOverlay dropAnimation={dropAnimation}>
          {activeDragItemType && null}
          {activeDragItemType === ACTIVE_DRAG_ITEM.COLUMN && (
            <Column column={activeDragItemData} />
          )}
          {activeDragItemType === ACTIVE_DRAG_ITEM.CARD && (
            <Cards card={activeDragItemData} />
          )}
        </DragOverlay>
      </Box>
    </DndContext>
  );
}

export default BoardContent;
