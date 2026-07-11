export function getPriorityColor(priority: string) {
  switch (priority) {
    case "High":
      return "red";
    case "Medium":
      return "yellow";
    case "Low":
      return "green";
    default:
      return "gray";
  }
}

export function getSentimentColor(sentiment: string) {
  switch (sentiment) {
    case "Positive":
      return "green";
    case "Neutral":
      return "yellow";
    case "Negative":
      return "red";
    default:
      return "gray";
  }
}