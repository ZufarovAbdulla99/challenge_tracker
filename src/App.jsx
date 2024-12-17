import { Container, Typography, Button, Box } from "@mui/material";
import ChallengeCard from "./ChallengeCard";

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Challenge Tracker
      </Typography>
      <ChallengeCard
        title="Daily Workout"
        progress={60}
        streak={12}
        completed={false}
      />
      <ChallengeCard
        title="Read 30 Pages"
        progress={40}
        streak={8}
        completed={false}
      />
      <ChallengeCard
        title="Meditation"
        progress={100}
        streak={15}
        completed={true}
      />
      <Box mt={2} textAlign="center">
        <Button variant="contained" color="primary">
          + Add New Challenge
        </Button>
      </Box>
    </Container>
  );
}

export default App;