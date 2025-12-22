import React from 'react';

interface TableRow {
  cells: string[];
  highlight?: boolean;
}

interface ComparisonTableProps {
  headers: string[];
  rows: TableRow[];
  caption?: string;
}

export default function ComparisonTable({ headers, rows, caption }: ComparisonTableProps) {
  return (
    <div className="my-8 overflow-hidden rounded-lg shadow-lg">
      {caption && (
        <div className="bg-navy-dark px-4 py-3">
          <h4 className="text-white font-semibold text-sm md:text-base">{caption}</h4>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-navy-dark">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-3 text-left text-white font-semibold text-sm md:text-base whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`
                  ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  ${row.highlight ? 'bg-gold-primary/10 border-l-4 border-gold-primary' : ''}
                  hover:bg-gold-primary/5 transition-colors duration-200
                `}
              >
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`
                      px-4 py-3 text-sm md:text-base text-gray-700
                      ${cellIndex === 0 ? 'font-medium text-gray-900' : ''}
                    `}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
