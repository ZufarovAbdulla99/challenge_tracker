import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  LinearProgress,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

const StreakBadge = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#fdecea",
  color: "#d32f2f",
  borderRadius: "12px",
  padding: "2px 8px",
  fontSize: "12px",
  fontWeight: 500,
}));

function ChallengeCard({ title, progress, streak, completed }) {
  return (
    <Card sx={{ mb: 2, opacity: completed ? 0.4 : 1 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4">{title}</Typography>
          <Box display="flex">
            <Typography>🔥</Typography>
            <StreakBadge>
              <Typography fontSize="small" sx={{ mr: 0.5, color: "red" }} />
              {streak} Day Streak
            </StreakBadge>
          </Box>
        </Box>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            my: 1,
            height: 8,
            borderRadius: 5,
            backgroundColor: completed ? "#d3e5d3" : "rgba(0, 0, 0, 0.1)",
            "& .MuiLinearProgress-bar": {
              backgroundColor: completed ? "#66bb6a" : "#1976d2",
            },
          }}
        />
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          sx={completed ? { backgroundColor: "green" } : ""}
        >
          {completed ? "Completed" : "Mark Complete"}
        </Button>
      </CardActions>
    </Card>
  );
}

export default ChallengeCard;
