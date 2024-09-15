import { Suspense } from "react";
import UpdatePromptPage from "./UpdatePromptPage";


export default function UpdatePrompt() {
  return (
    <Suspense fallback={<div>Loading prompt details...</div>}>
      <UpdatePromptPage />
    </Suspense>
  );
}