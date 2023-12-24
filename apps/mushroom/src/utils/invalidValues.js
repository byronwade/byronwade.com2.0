export function isInvalidValue(value) {
  const invalidValues = [
    'Not known',
    'Not precisely documented, but known for centuries in indigenous cultures',
    'Not available',
    'Information not available',
    'Not applicable',
    'Not Applicable',
    'Not Available',
    'N/A',
    'Null',
    'null',
    'NULL',
    '0',
    0,
    undefined,
    null,
    false,
    '',
    ' ',
    '[]',
    '{}'
  ];
  return invalidValues.includes(value) || (typeof value === 'string' && value.trim() === '');
}
