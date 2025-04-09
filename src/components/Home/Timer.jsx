import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";

const timer = (targetDate) => {
  const now = dayjs();
  const end = dayjs(targetDate);
  const difference = end.diff(now, "second"); // Difference in seconds

  const days = Math.floor(difference / (24 * 60 * 60))
    .toString()
    .padStart(2, "0");
  const hours = Math.floor((difference / (60 * 60)) % 24)
    .toString()
    .padStart(2, "0"); // 3600 seconds in an hour
  const minutes = Math.floor((difference % 3600) / 60)
    .toString()
    .padStart(2, "0"); // Remaining seconds after extracting hours, divided by 60 to get minutes
  const seconds = (difference % 60).toString().padStart(2, "0"); // Remaining seconds

  return {
    difference,
    days,
    hours,
    minutes,
    seconds,
  };
};

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const { difference, ...rest } = timer("2025-04-04T00:00:00Z");

      if (difference <= 0) {
        clearInterval(timerInterval);
      } else {
        setTimeLeft(rest);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <Typography
      component="p"
      sx={{
        my: 0.5,
        fontSize: { xs: "12px", sm: "18px" },
      }}
    >
      <span
        style={{
          background: "linear-gradient(-90deg, #e561c3 0%, #a261e5 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          width: "max-content",
          fontWeight: "bold",
        }}
      >
        {timeLeft.hours} h :{timeLeft.minutes}m :{timeLeft.seconds}s
      </span>
    </Typography>
  );
}
