const PercentageSvg = ({color,height}) => {
  return (
    <span>
      <svg
        fill={color}
        aria-hidden="true"
        focusable="false"
        className="fl-on-interaction-primary"
        width={height}
        height={height}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.65484 2.56705C7.3923 1.81115 8.60773 1.81115 9.34518 2.56705L9.39322 2.61629C9.74688 2.9788 10.2319 3.18322 10.7384 3.18322L10.9377 3.18322C11.9755 3.18322 12.8169 4.02447 12.8169 5.0622V5.26146C12.8169 5.76789 13.0213 6.25287 13.3839 6.60649L13.4331 6.65452C14.1891 7.3919 14.1891 8.6072 13.4331 9.34457L13.3839 9.39261C13.0213 9.74623 12.8169 10.2312 12.8169 10.7376V10.9369C12.8169 11.9746 11.9755 12.8159 10.9377 12.8159L10.7384 12.8159C10.2319 12.8159 9.74688 13.0203 9.39322 13.3828L9.34518 13.432C8.60773 14.188 7.3923 14.1879 6.65484 13.432L6.6068 13.3828C6.25314 13.0203 5.76811 12.8159 5.26163 12.8159L5.06235 12.8159C4.02451 12.8159 3.18316 11.9746 3.18316 10.9369L3.18316 10.7376C3.18316 10.2312 2.97872 9.74623 2.61618 9.39261L2.56693 9.34457C1.81094 8.6072 1.81094 7.3919 2.56693 6.65452L2.61618 6.60649C2.97872 6.25287 3.18316 5.76789 3.18316 5.26147L3.18316 5.0622C3.18316 4.02447 4.0245 3.18322 5.06235 3.18322L5.26163 3.18322C5.76811 3.18322 6.25314 2.9788 6.6068 2.61629L6.65484 2.56705ZM6.89645 5.89616C6.89645 6.44839 6.44873 6.89607 5.89644 6.89607C5.34415 6.89607 4.89643 6.44839 4.89643 5.89616C4.89643 5.34393 5.34415 4.89626 5.89644 4.89626C6.44873 4.89626 6.89645 5.34393 6.89645 5.89616ZM10.1036 11.1028C10.6559 11.1028 11.1036 10.6552 11.1036 10.1029C11.1036 9.5507 10.6559 9.10303 10.1036 9.10303C9.5513 9.10303 9.10358 9.5507 9.10358 10.1029C9.10358 10.6552 9.5513 11.1028 10.1036 11.1028ZM5.90129 9.05883C5.6084 9.35172 5.6084 9.82659 5.90129 10.1195C6.19419 10.4124 6.66906 10.4124 6.96195 10.1195L10.1439 6.93751C10.4368 6.64461 10.4368 6.16974 10.1439 5.87685C9.85104 5.58395 9.37617 5.58395 9.08327 5.87685L5.90129 9.05883Z"
        />
      </svg>
    </span>
  );
};

export default PercentageSvg;
