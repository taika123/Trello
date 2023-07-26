import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import PeopleIcon from "@mui/icons-material/People";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Cards({ card }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card._id, data: { ...card } });

  const dndKitColumnStyle = {
    touchAction: "none",
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.66 : undefined,
  };

  //handle socials bottom card
  const handleCardActions = () => {
    return (
      !!card.memberIds?.length ||
      !!card.comments?.length ||
      !!card.attachments?.length
    );
  };
  return (
    <Box
      ref={setNodeRef}
      style={dndKitColumnStyle}
      {...attributes}
      {...listeners}
    >
      <Card
        sx={{
          cursor: "pointer",
          overflow: "unset",
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
          // ".MuiCardContent-root": {
          //   ":last-child": {
          //     marginBottom: "10px",
          //   },
          // },
        }}
      >
        {card?.cover && (
          <CardMedia
            sx={{ height: 140 }}
            image={card.cover}
            title="green iguana"
          />
        )}

        <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
          <Typography>{card.title}</Typography>
        </CardContent>

        {handleCardActions() && (
          <CardActions
            sx={{
              p: "0px 4px 8px 4px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {!!card.memberIds?.length && (
              <Button size="small" startIcon={<PeopleIcon />}>
                {card.memberIds?.length}
              </Button>
            )}
            {!!card.comments?.length && (
              <Button size="small" startIcon={<QuestionAnswerIcon />}>
                {card.comments?.length}
              </Button>
            )}
            {!!card.attachments?.length && (
              <Button size="small" startIcon={<RemoveRedEyeIcon />}>
                {card.attachments?.length}
              </Button>
            )}
          </CardActions>
        )}
      </Card>
    </Box>
  );
}

export default Cards;
