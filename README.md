


https://fastify.dev/docs/latest/Guides/Getting-Started

https://github.com/punkish/fastify-better-sqlite3


WITH RECURSIVE DepartmentHierarchy AS (
  SELECT
    id,
    parent_id,
    name,
    1 as depth
  FROM
    departments
  WHERE
    parent_id IS NULL

  UNION ALL

  SELECT
    d.id,
    d.parent_id,
    d.name,
    dh.depth + 1
  FROM
    departments d
  JOIN
    DepartmentHierarchy dh ON d.parent_id = dh.id
)

SELECT
  RPAD('', depth - 1, '  ') || name AS department_tree
FROM
  DepartmentHierarchy
ORDER BY
  depth, name;
