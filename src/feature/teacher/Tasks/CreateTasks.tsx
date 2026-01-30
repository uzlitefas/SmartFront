import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

export default function CreateTasks() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctIndex, setCorrectIndex] = useState<number | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleOptionChange = (index: number, value: string) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  const handleAddQuestion = () => {
    if (!question.trim()) return;
    if (options.some((o) => !o.trim())) return;
    if (correctIndex === null) return;

    const newQuestion: Question = {
      id: Date.now(),
      question,
      options,
      correctIndex,
    };

    setQuestions((prev) => [newQuestion, ...prev]);
    setQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectIndex(null);
  };

  const handleDelete = (id: number) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      <h1 className="text-3xl font-bold">Create Test Question</h1>

      {/* FORM */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow space-y-6">
        {/* QUESTION */}
        <div className="space-y-2">
          <label className="font-medium">Question</label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={3}
            placeholder="Write the question..."
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring"
          />
        </div>

        {/* OPTIONS */}
        <div className="space-y-3">
          <p className="font-medium">Options</p>

          {options.map((opt, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
            >
              <input
                type="radio"
                name="correct"
                checked={correctIndex === index}
                onChange={() => setCorrectIndex(index)}
              />

              <input
                type="text"
                placeholder={`Option ${index + 1}`}
                value={opt}
                onChange={(e) =>
                  handleOptionChange(index, e.target.value)
                }
                className="flex-1 border rounded-xl px-4 py-2 focus:outline-none focus:ring"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleAddQuestion}
          className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition"
        >
          Add Question
        </button>
      </div>

      {/* QUESTIONS LIST */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Questions</h2>

        {questions.length === 0 && (
          <p className="text-gray-500">
            No questions added yet
          </p>
        )}

        {questions.map((q) => (
          <div
            key={q.id}
            className="border rounded-2xl p-5 space-y-3"
          >
            <p className="font-semibold">{q.question}</p>

            <ul className="space-y-1">
              {q.options.map((opt, i) => (
                <li
                  key={i}
                  className={`text-sm ${
                    q.correctIndex === i
                      ? "text-green-600 font-medium"
                      : "text-gray-600"
                  }`}
                >
                  {String.fromCharCode(65 + i)}. {opt}
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleDelete(q.id)}
              className="text-sm text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
