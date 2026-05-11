type Props = {
  goals: string[];
};

export function LearningGoals({ goals }: Props) {
  return (
    <div className="card p-5 sm:p-6 bg-gradient-to-br from-amber-50 to-white border-amber-100">
      <div className="flex items-center gap-2 mb-3">
        <span aria-hidden className="text-xl">🎯</span>
        <h3 className="text-base font-bold text-amber-900">このレッスンで学べること</h3>
      </div>
      <ul className="space-y-2">
        {goals.map((g, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-amber-900/90">
            <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            <span>{g}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
