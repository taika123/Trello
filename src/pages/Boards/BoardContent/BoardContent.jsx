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
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
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

  //khi ket thuc tha (drop)
  const handleDragEnd = (e) => {
    // console.log(e, "handle evnent");
    const { active, over } = e;

    // kiem tra neu over = null thi return
    if (!over) return;

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
