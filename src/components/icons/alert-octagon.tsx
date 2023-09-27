export default function AlertOctagon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={40}
      height={40}
      fill='none'
      {...props}
    >
      <path
        stroke='#CB2B28'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={3}
        d='M13.1 3.333h13.8l9.766 9.767v13.8L26.9 36.667H13.1L3.333 26.9V13.1L13.1 3.333ZM20 13.334V20'
      />
      <path
        stroke='#CB2B28'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M20 26.666h.017'
      />
    </svg>
  );
}
