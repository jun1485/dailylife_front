function DeleteIcon(size = { width: '24', height: '24' }, color = '#BCBCBC') {
  return (
    <svg width={size.width} height={size.height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L11 11" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default DeleteIcon;
