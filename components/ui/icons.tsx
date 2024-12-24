'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

function IconNextChat({
  className,
  inverted,
  ...props
}: React.ComponentProps<'svg'> & { inverted?: boolean }) {
  const id = React.useId()

  return (
    <svg
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-4', className)}
      {...props}
    >
      <defs>
        <linearGradient
          id={`gradient-${id}-1`}
          x1="10.6889"
          y1="10.3556"
          x2="13.8445"
          y2="14.2667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={inverted ? 'white' : 'black'} />
          <stop
            offset={1}
            stopColor={inverted ? 'white' : 'black'}
            stopOpacity={0}
          />
        </linearGradient>
        <linearGradient
          id={`gradient-${id}-2`}
          x1="11.7555"
          y1="4.8"
          x2="11.7376"
          y2="9.50002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={inverted ? 'white' : 'black'} />
          <stop
            offset={1}
            stopColor={inverted ? 'white' : 'black'}
            stopOpacity={0}
          />
        </linearGradient>
      </defs>
      <path
        d="M1 16L2.58314 11.2506C1.83084 9.74642 1.63835 8.02363 2.04013 6.39052C2.4419 4.75741 3.41171 3.32057 4.776 2.33712C6.1403 1.35367 7.81003 0.887808 9.4864 1.02289C11.1628 1.15798 12.7364 1.8852 13.9256 3.07442C15.1148 4.26363 15.842 5.83723 15.9771 7.5136C16.1122 9.18997 15.6463 10.8597 14.6629 12.224C13.6794 13.5883 12.2426 14.5581 10.6095 14.9599C8.97637 15.3616 7.25358 15.1692 5.74942 14.4169L1 16Z"
        fill={inverted ? 'black' : 'white'}
        stroke={inverted ? 'black' : 'white'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <mask
        id="mask0_91_2047"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={0}
        width={16}
        height={16}
      >
        <circle cx={9} cy={8} r={8} fill={inverted ? 'black' : 'white'} />
      </mask>
      <g mask="url(#mask0_91_2047)">
        <circle cx={9} cy={8} r={8} fill={inverted ? 'black' : 'white'} />
        <path
          d="M14.2896 14.0018L7.146 4.8H5.80005V11.1973H6.87681V6.16743L13.4444 14.6529C13.7407 14.4545 14.0231 14.2369 14.2896 14.0018Z"
          fill={`url(#gradient-${id}-1)`}
        />
        <rect
          x="11.2222"
          y="4.8"
          width="1.06667"
          height="6.4"
          fill={`url(#gradient-${id}-2)`}
        />
      </g>
    </svg>
  )
}
function IconItaloMagnoWhite({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"     className={cn('size-4', className)}
    {...props} version="1.1"><path d="M 50.416 83.917 C 50.187 84.146, 50.002 101.471, 50.005 122.417 L 50.010 160.500 52.408 163.500 L 54.807 166.500 76.828 166.804 L 98.849 167.107 102.174 164.136 L 105.500 161.166 105.547 123.333 L 105.595 85.500 105.047 122.500 C 104.746 142.850, 104.125 160.261, 103.666 161.190 C 101.515 165.549, 99.074 166, 77.612 166 L 57.153 166 54.077 163.411 L 51 160.822 51 122.911 L 51 85 78.250 84.832 C 93.238 84.739, 103.925 84.526, 102 84.358 C 96.241 83.854, 50.865 83.466, 50.416 83.917 M 141.427 84.118 C 140.954 84.884, 176.680 135, 177.700 135 C 177.995 135, 177.147 133.537, 175.814 131.750 C 168.182 121.515, 143 86.095, 143 85.594 C 143 85.267, 157.781 85, 175.847 85 L 208.695 85 247.597 138.998 C 268.994 168.698, 286.773 192.998, 287.106 192.998 C 287.440 192.999, 299.326 171.738, 313.520 145.750 C 342.626 92.459, 340.655 96.157, 339.237 97.500 C 338.657 98.050, 327.615 117.850, 314.700 141.500 C 287.595 191.136, 287.679 190.985, 286.943 190.994 C 286.636 190.997, 285.017 189.088, 283.344 186.750 C 276.813 177.620, 223.586 103.930, 216.531 94.250 L 209.061 84 196.781 83.869 C 152.075 83.390, 141.849 83.436, 141.427 84.118 M 360.375 83.757 L 346.250 84.053 342.976 90.277 C 341.175 93.700, 340.090 96.141, 340.565 95.702 C 341.040 95.264, 342.571 92.789, 343.968 90.202 L 346.507 85.500 388.754 85.239 L 431 84.978 431 224.066 L 431 363.154 427.951 366.203 C 426.274 367.879, 425.636 368.970, 426.533 368.626 C 427.430 368.282, 428.340 368, 428.556 368 C 428.772 368, 429.635 366.672, 430.474 365.050 C 431.820 362.447, 432 345.734, 432 223.050 L 432 84 404.582 84 C 389.502 84, 376.564 83.879, 375.832 83.730 C 375.099 83.582, 368.144 83.594, 360.375 83.757 M 178.642 137 C 179.975 138.938, 241.203 224.067, 259.647 249.627 C 263.666 255.196, 268.623 261.218, 270.662 263.008 C 282.943 273.791, 300.244 273.686, 310.705 262.766 C 312.426 260.970, 316.041 255.450, 318.739 250.500 C 344.667 202.926, 371.783 153.590, 374.167 149.652 C 375.781 146.986, 376.966 144.422, 376.801 143.955 C 376.635 143.488, 362.325 169.031, 345 200.717 C 327.675 232.404, 312.275 259.763, 310.777 261.516 C 309.279 263.269, 305.274 265.950, 301.876 267.475 C 296.509 269.884, 294.804 270.183, 288.871 269.759 C 280.777 269.180, 272.789 264.971, 267.501 258.500 C 265.703 256.300, 245.464 228.400, 222.526 196.500 C 199.587 164.600, 180.097 137.825, 179.214 137 C 177.788 135.667, 177.724 135.667, 178.642 137 M 376.484 257.170 L 376.500 363.839 378.924 366.420 C 380.258 367.839, 381.833 368.986, 382.424 368.970 C 383.016 368.953, 382.718 368.484, 381.762 367.927 C 377.437 365.407, 377.524 367.444, 376.984 256.500 L 376.468 150.500 376.484 257.170 M 65.250 179.689 C 66.213 179.941, 67.787 179.941, 68.750 179.689 C 69.713 179.438, 68.925 179.232, 67 179.232 C 65.075 179.232, 64.287 179.438, 65.250 179.689 M 77.250 179.742 C 80.963 179.934, 87.037 179.934, 90.750 179.742 C 94.463 179.549, 91.425 179.392, 84 179.392 C 76.575 179.392, 73.537 179.549, 77.250 179.742 M 52.861 181.911 C 49.508 184.625, 49.421 187.677, 50.012 281.908 L 50.523 363.500 50.762 274.673 L 51 185.846 53.923 182.923 C 57.200 179.646, 56.492 178.972, 52.861 181.911 M 101.234 182.918 L 104.500 185.835 105.024 273.668 L 105.548 361.500 105.524 273.330 L 105.500 185.160 103.076 182.580 C 101.742 181.161, 100.048 180, 99.310 180 C 98.572 180, 99.438 181.313, 101.234 182.918 M 151.888 276.500 C 147.130 279.085, 146.924 280.939, 146.705 323.066 C 146.487 364.965, 146.558 365.667, 151.273 368.107 C 153.226 369.117, 153.161 368.898, 150.750 366.325 L 148 363.391 148 322.618 L 148 281.846 150.923 278.923 L 153.846 276 174.407 276 L 194.968 276 198.234 278.917 L 201.500 281.834 202.028 321.667 L 202.556 361.500 202.776 323 C 202.976 288.071, 202.835 284.177, 201.248 281.014 C 198.436 275.406, 196.731 275.027, 174.500 275.055 C 159.157 275.074, 153.892 275.411, 151.888 276.500 M 104.079 362.798 C 104.036 363.512, 102.809 365.199, 101.354 366.548 C 99.899 367.896, 99.145 369, 99.680 369 C 101.356 369, 105.240 364.207, 104.686 362.821 C 104.263 361.763, 104.142 361.758, 104.079 362.798 M 201 362.881 C 201 363.549, 199.762 365.262, 198.250 366.687 C 195.973 368.833, 195.883 369.079, 197.727 368.116 C 200.123 366.866, 202.532 363.198, 201.581 362.248 C 201.261 361.928, 201 362.213, 201 362.881 M 51.221 365.164 C 51.435 365.805, 52.710 367.022, 54.055 367.869 L 56.500 369.409 54.076 366.704 C 51.459 363.785, 50.609 363.327, 51.221 365.164 M 67.750 369.746 C 73.388 369.924, 82.612 369.924, 88.250 369.746 C 93.888 369.568, 89.275 369.422, 78 369.422 C 66.725 369.422, 62.112 369.568, 67.750 369.746 M 164.750 369.746 C 170.387 369.924, 179.613 369.924, 185.250 369.746 C 190.887 369.568, 186.275 369.422, 175 369.422 C 163.725 369.422, 159.113 369.568, 164.750 369.746 M 393.750 369.746 C 399.387 369.924, 408.613 369.924, 414.250 369.746 C 419.887 369.568, 415.275 369.422, 404 369.422 C 392.725 369.422, 388.113 369.568, 393.750 369.746" stroke="none" fill="#5a5a5a" fill-rule="evenodd"/>
    <path d="M 51 122.911 L 51 160.822 54.077 163.411 L 57.153 166 77.612 166 C 100.238 166, 101.895 165.609, 103.925 159.785 C 104.614 157.808, 105 143.836, 105 120.851 L 105 85 78 85 L 51 85 51 122.911 M 143 85.578 C 143 85.897, 151.480 97.934, 161.844 112.328 C 246.714 230.199, 264.641 255, 267.501 258.500 C 272.789 264.971, 280.777 269.180, 288.871 269.759 C 294.804 270.183, 296.509 269.884, 301.876 267.475 C 305.274 265.950, 309.279 263.269, 310.777 261.516 C 312.275 259.763, 327.675 232.414, 345 200.740 L 376.500 143.150 377 252.825 C 377.527 368.403, 377.404 365.540, 381.957 367.977 C 383.083 368.580, 392.353 369, 404.511 369 L 425.154 369 428.077 366.077 L 431 363.154 431 224.066 L 431 84.978 388.798 85.239 L 346.596 85.500 342.976 92 C 340.985 95.575, 327.737 119.763, 313.535 145.750 C 299.333 171.738, 287.440 192.999, 287.106 192.998 C 286.773 192.998, 268.994 168.698, 247.597 138.998 L 208.695 85 175.847 85 C 157.781 85, 143 85.260, 143 85.578 M 53.923 182.923 L 51 185.846 51 274.736 L 51 363.626 53.805 366.313 L 56.609 369 77.659 369 C 98.527 369, 98.730 368.979, 101.314 366.585 C 102.747 365.257, 104.176 363.120, 104.490 361.835 C 104.804 360.551, 104.935 320.425, 104.781 272.668 L 104.500 185.835 101.234 182.918 L 97.968 180 77.407 180 L 56.846 180 53.923 182.923 M 150.923 278.923 L 148 281.846 148 322.618 L 148 363.391 150.687 366.195 L 153.374 369 174.541 369 C 195.534 369, 195.729 368.980, 198.314 366.585 C 199.747 365.257, 201.180 363.120, 201.500 361.835 C 201.819 360.551, 201.950 342.025, 201.790 320.667 L 201.500 281.834 198.234 278.917 L 194.968 276 174.407 276 L 153.846 276 150.923 278.923" stroke="none" fill="currentColor" fill-rule="evenodd"

    /></svg>

  )
}

function IconItaloMagnoBlack({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="500.000000pt" height="500.000000pt" viewBox="0 0 500.000000 500.000000"
      preserveAspectRatio="xMidYMid meet"
      className={cn('size-4', className)
      }
      {...props}

    >

      <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M590 3774 l0 -376 29 -29 29 -29 212 0 212 0 29 29 29 29 0 376 0
376 -270 0 -270 0 0 -376z"/>
        <path d="M1512 4142 c2 -4 71 -101 153 -216 83 -114 366 -507 630 -874 471
-654 481 -667 545 -706 57 -36 73 -41 136 -44 61 -4 81 0 126 20 29 14 67 39
83 56 16 17 163 276 327 574 163 299 306 559 317 578 l21 35 0 -1081 c0 -765
3 -1090 11 -1113 19 -55 45 -61 264 -61 219 0 245 6 264 61 8 23 11 426 11
1406 l0 1373 -426 -2 -426 -3 -293 -533 c-160 -294 -296 -534 -301 -534 -4 -1
-182 240 -394 535 l-385 536 -333 1 c-184 0 -332 -4 -330 -8z"/>
        <path d="M619 3171 l-29 -29 0 -886 0 -885 24 -28 24 -28 216 -3 216 -3 30 30
30 29 0 887 0 887 -29 29 -29 29 -212 0 -212 0 -29 -29z"/>
        <path d="M1589 2211 l-29 -29 0 -406 0 -405 24 -28 24 -28 216 -3 216 -3 30
30 30 29 0 407 0 407 -29 29 -29 29 -212 0 -212 0 -29 -29z"/>
      </g>
    </svg>

  )
}

function IconVercel({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      aria-label="Vercel logomark"
      role="img"
      viewBox="0 0 74 64"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

function IconGitHub({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function IconSeparator({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="none"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M16.88 3.549L7.12 20.451"></path>
    </svg>
  )
}

function IconArrowDown({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

function IconArrowRight({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
    </svg>
  )
}

function IconUser({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z" />
    </svg>
  )
}

function IconPlus({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z" />
    </svg>
  )
}

function IconArrowElbow({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z" />
    </svg>
  )
}

function IconSpinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4 animate-spin', className)}
      {...props}
    >
      <path d="M232 128a104 104 0 0 1-208 0c0-41 23.81-78.36 60.66-95.27a8 8 0 0 1 6.68 14.54C60.15 61.59 40 93.27 40 128a88 88 0 0 0 176 0c0-34.73-20.15-66.41-51.34-80.73a8 8 0 0 1 6.68-14.54C208.19 49.64 232 87 232 128Z" />
    </svg>
  )
}

function IconMessage({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M216 48H40a16 16 0 0 0-16 16v160a15.84 15.84 0 0 0 9.25 14.5A16.05 16.05 0 0 0 40 240a15.89 15.89 0 0 0 10.25-3.78.69.69 0 0 0 .13-.11L82.5 208H216a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM40 224Zm176-32H82.5a16 16 0 0 0-10.3 3.75l-.12.11L40 224V64h176Z" />
    </svg>
  )
}

function IconTrash({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z" />
    </svg>
  )
}

function IconRefresh({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M197.67 186.37a8 8 0 0 1 0 11.29C196.58 198.73 170.82 224 128 224c-37.39 0-64.53-22.4-80-39.85V208a8 8 0 0 1-16 0v-48a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16H55.44C67.76 183.35 93 208 128 208c36 0 58.14-21.46 58.36-21.68a8 8 0 0 1 11.31.05ZM216 40a8 8 0 0 0-8 8v23.85C192.53 54.4 165.39 32 128 32c-42.82 0-68.58 25.27-69.66 26.34a8 8 0 0 0 11.3 11.34C69.86 69.46 92 48 128 48c35 0 60.24 24.65 72.56 40H168a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function IconStop({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm24-120h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8Zm-8 48h-32v-32h32Z" />
    </svg>
  )
}

function IconSidebar({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM40 56h40v144H40Zm176 144H96V56h120v144Z" />
    </svg>
  )
}

function IconMoon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M233.54 142.23a8 8 0 0 0-8-2 88.08 88.08 0 0 1-109.8-109.8 8 8 0 0 0-10-10 104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88 104.84 104.84 0 0 0 37-52.91 8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104 106 106 0 0 0 14.92-1.06 89 89 0 0 1-26.02 31.4Z" />
    </svg>
  )
}

function IconSun({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z" />
    </svg>
  )
}

function IconCopy({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z" />
    </svg>
  )
}

function IconCheck({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

function IconDownload({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0Zm-101.66 5.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0-11.32-11.32L136 132.69V40a8 8 0 0 0-16 0v92.69l-26.34-26.35a8 8 0 0 0-11.32 11.32Z" />
    </svg>
  )
}

function IconClose({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
    </svg>
  )
}

function IconEdit({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  )
}

function IconShare({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="m237.66 106.35-80-80A8 8 0 0 0 144 32v40.35c-25.94 2.22-54.59 14.92-78.16 34.91-28.38 24.08-46.05 55.11-49.76 87.37a12 12 0 0 0 20.68 9.58c11-11.71 50.14-48.74 107.24-52V192a8 8 0 0 0 13.66 5.65l80-80a8 8 0 0 0 0-11.3ZM160 172.69V144a8 8 0 0 0-8-8c-28.08 0-55.43 7.33-81.29 21.8a196.17 196.17 0 0 0-36.57 26.52c5.8-23.84 20.42-46.51 42.05-64.86C99.41 99.77 127.75 88 152 88a8 8 0 0 0 8-8V51.32L220.69 112Z" />
    </svg>
  )
}

function IconUsers({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M117.25 157.92a60 60 0 1 0-66.5 0 95.83 95.83 0 0 0-47.22 37.71 8 8 0 1 0 13.4 8.74 80 80 0 0 1 134.14 0 8 8 0 0 0 13.4-8.74 95.83 95.83 0 0 0-47.22-37.71ZM40 108a44 44 0 1 1 44 44 44.05 44.05 0 0 1-44-44Zm210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16 44 44 0 1 0-16.34-84.87 8 8 0 1 1-5.94-14.85 60 60 0 0 1 55.53 105.64 95.83 95.83 0 0 1 47.22 37.71 8 8 0 0 1-2.33 11.07Z" />
    </svg>
  )
}

function IconExternalLink({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224 104a8 8 0 0 1-16 0V59.32l-66.33 66.34a8 8 0 0 1-11.32-11.32L196.68 48H152a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-40 24a8 8 0 0 0-8 8v72H48V80h72a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-72a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function IconChevronUpDown({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M181.66 170.34a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L128 212.69l42.34-42.35a8 8 0 0 1 11.32 0Zm-96-84.68L128 43.31l42.34 42.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32Z" />
    </svg>
  )
}

export {
  IconEdit,
  IconNextChat,
  IconItaloMagnoBlack,
  IconVercel,
  IconGitHub,
  IconSeparator,
  IconArrowDown,
  IconArrowRight,
  IconUser,
  IconPlus,
  IconArrowElbow,
  IconSpinner,
  IconMessage,
  IconTrash,
  IconRefresh,
  IconStop,
  IconSidebar,
  IconMoon,
  IconSun,
  IconCopy,
  IconCheck,
  IconDownload,
  IconClose,
  IconShare,
  IconUsers,
  IconExternalLink,
  IconChevronUpDown,
  IconItaloMagnoWhite
}
