import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { PostCardProps } from "../model/types";
import undefinedImg from "@assets/svg/img.svg";

import { useState } from "react";

export const CustomCard = (props: PostCardProps) => {
  const { title, body, image, onClick } = props;
  const [isErrorImg, setErrorImg] = useState(false);

  const handleError = () => {
    setErrorImg(true);
  };

  return (
    <Card sx={{ maxWidth: 345, cursor: "pointer" }} onClick={onClick}>
      <CardMedia
        component="img"
        height="140"
        image={isErrorImg ? undefinedImg : image}
        alt={title}
        onError={handleError}
      />
      <CardContent>
        <Typography variant="h6" component="div" noWrap>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};
