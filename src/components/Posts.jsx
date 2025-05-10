import {
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";




const Posts = ({ posts, onLike }) => {
  const handleChange = (event, postId) => {
    onLike(postId);
  };
  return (
    <>
      <Box>
        {Array.isArray(posts) &&
          posts.map((post) => (
            <Card key={post.id} sx={{ mb: 2 }}>
              <CardHeader
                avatar={
                  <Avatar
                    src={post.userImage}
                    aria-label={post.userName}
                  ></Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVert />
                  </IconButton>
                }
                title={post.userName}
                subheader={post.date}
              />
              <CardMedia
                component="img"
                height="400"
                image={post.postImage}
                alt="post"
              />
              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {post.content}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                  checked={post.isLiked}
                  onChange={(event) => handleChange(event, post.id)}
                />
                <Typography variant="body2">{post.likes}</Typography>
                <IconButton aria-label="share">
                  <Share />
                </IconButton>
              </CardActions>
            </Card>
          ))}
      </Box>
    </>
  );
};

export default Posts;
