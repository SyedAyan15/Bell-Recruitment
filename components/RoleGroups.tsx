export type RoleGroup = { label: string; roles?: string[] };

// "Roles we recruit" as cards, one per group, with each job title as a chip.
// A group without roles shows as a card with just its label.
export default function RoleGroups({ groups }: { groups: RoleGroup[] }) {
  return (
    <div className="role-groups">
      {groups.map((g) => (
        <div className="role-group" key={g.label}>
          <h3>{g.label}</h3>
          {g.roles && g.roles.length > 0 && (
            <ul className="role-chips">
              {g.roles.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
