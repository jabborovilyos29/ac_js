import { Card, CardContent, CardMedia, Typography } from "@mui/material";

type PostCardProps = {
  title: string;
  body: string;
  image: string;
  onClick: () => void;
};

export const CustomCard = (props: PostCardProps) => {
  const { title, body, image, onClick } = props;

  return (
    <Card sx={{ maxWidth: 345, cursor: "pointer" }} onClick={onClick}>
      <CardMedia component="img" height="140" image={image} alt={title} />
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
