function Banner() {
  return (
    <div className="flex w-full rounded-[40px] bg-neutral-700 items-center justify-center text-neutral-50 dark:text-neutral-400 aspcet-[16/9]">
      <svg
        className="w-4/5"
        viewBox="0 0 1357 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="V"
          className="animate-bottom-to-top"
          d="M25.2469 0L71.4837 131.106H73.3088L119.546 0H139.318L82.1303 155.745H62.6622L5.47461 0H25.2469Z"
          fill="currentColor"
        />
        <path
          id="A"
          className="animate-bottom-to-top"
          d="M156.581 155.745H136.808L193.996 0H213.464L270.652 155.745H250.879L204.338 24.6393H203.122L156.581 155.745ZM163.881 94.907H243.579V111.637H163.881V94.907Z"
          fill="currentColor"
        />
        <path
          id="N"
          className="animate-bottom-to-top"
          d="M418.412 0V155.745H400.16L315.291 33.4608H313.77V155.745H294.911V0H313.162L398.335 122.588H399.856V0H418.412Z"
          fill="currentColor"
        />
        <path
          id="H"
          className="animate-bottom-to-top"
          d="M516.379 155.745V0H535.239V69.3551H618.283V0H637.143V155.745H618.283V86.0856H535.239V155.745H516.379Z"
          fill="currentColor"
        />
        <path
          id="U"
          className="animate-bottom-to-top"
          d="M777.108 0H795.967V103.12C795.967 113.767 793.458 123.273 788.439 131.638C783.47 139.952 776.449 146.518 767.374 151.334C758.299 156.1 747.652 158.483 735.434 158.483C723.215 158.483 712.569 156.1 703.494 151.334C694.419 146.518 687.372 139.952 682.353 131.638C677.384 123.273 674.9 113.767 674.9 103.12V0H693.76V101.599C693.76 109.204 695.433 115.972 698.779 121.904C702.125 127.785 706.891 132.424 713.076 135.82C719.312 139.167 726.764 140.84 735.434 140.84C744.103 140.84 751.556 139.167 757.792 135.82C764.028 132.424 768.793 127.785 772.089 121.904C775.435 115.972 777.108 109.204 777.108 101.599V0Z"
          fill="currentColor"
        />
        <path
          id="L"
          className="animate-bottom-to-top"
          d="M833.63 155.745V0H852.49V139.014H924.887V155.745H833.63Z"
          fill="currentColor"
        />
        <path
          id="Z"
          className="animate-bottom-to-top"
          d="M948.918 155.745V142.056L1032.87 16.7304H948.005V0H1055.38V13.6885L971.428 139.014H1056.3V155.745H948.918Z"
          fill="currentColor"
        />
        <path
          id="E"
          className="animate-bottom-to-top"
          d="M1087.93 155.745V0H1181.93V16.7304H1106.79V69.3551H1177.06V86.0856H1106.79V139.014H1183.14V155.745H1087.93Z"
          fill="currentColor"
        />
        <path
          id="N1"
          className="animate-bottom-to-top"
          d="M1339.42 0V155.745H1321.17L1236.3 33.4608H1234.78V155.745H1215.92V0H1234.17L1319.34 122.588H1320.86V0H1339.42Z"
          fill="currentColor"
        />
        <path
          className="animate-left-to-right"
          d="m0 150.727 158.355-.001-2.762 8.366H0v-8.365ZM249.283 150.726h64.491v8.365h-61.742l-2.749-8.365ZM535.24 150.726H396.681l5.685 8.365H535.24v-8.365ZM618.28 150.726h616.5v8.365h-616.5v-8.365ZM1356.83 150.726h-39.14l5.78 8.365h33.36v-8.365Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <div className="p-12">
      <main className="max-w-screen-3xl m-auto flex flex-wrap">
        <div className="flex w-full" style={{ aspectRatio: "5/1" }}>
          <Banner />
        </div>

        <div className="flex w-1/2 items-center">
          <p className=" text-5xl text-neutral-700 leading-normal">
            Passinated{" "}
            <strong className="text-neutral-400">Software Engineer</strong>{" "}
            which loves to explore the{" "}
            <strong className="text-neutral-400">newest</strong> design trends
            and <strong className="text-neutral-400">web</strong> technoligies.
            With lot’s of{" "}
            <strong className="text-neutral-400">experience</strong> in coding.
          </p>
        </div>

        {/* <div className="flex w-full flex-col gap-8 justify-between xl:flex-row">
          <div className="space-y-8 w-full max-w-4xl">
            <div className="py-3 text-center bg-neutral-700 rounded-[40px] w-2/3">
              <span className="text-3xl text-neutral-50 dark:text-neutral-400">
                Ingmar van Hulzen
              </span>
            </div>
            <svg
              viewBox="0 0 69 38"
              fill="currentColor"
              className="text-neutral-700 dark:text-neutral-400 animate-pulse"
            >
              <text x="0" y="15">
                Software
              </text>
              <text x="0" y="34.5">
                Engineer
              </text>
            </svg>
          </div>
          <div className="relative w-full max-w-4xl">
            <p className="text-3xl text-neutral-700 dark:text-neutral-400 leading-tight">
              Currently working at Jouw Omgeving, and love to explore the newest
              Web technoligies during my spare time.
            </p>

            <svg
              className="fill-neutral-700 absolute bottom-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 768 382"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M768 32C768 14.3269 753.673 0 736 0H416C398.327 0 384 14.3269 384 32V32C384 49.6731 369.673 64 352 64H32C14.3269 64 0 78.3269 0 96V350C0 367.673 14.3269 382 32 382H352C369.673 382 384 367.673 384 350V350C384 332.327 398.327 318 416 318H736C753.673 318 768 303.673 768 286V32Z"
              />
            </svg>
          </div>
        </div>

        <div className="flex w-full gap-8 my-32">
          <div className="w-full text-neutral-700">
            <svg
              className="w-4/5"
              viewBox="0 0 600 597"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M400 40C400 17.9086 382.091 0 360 0H40C17.9086 0 0 17.9086 0 40V360C0 382.091 17.9086 400 40 400H160C182.091 400 200 417.909 200 440V557C200 579.091 217.909 597 240 597H560C582.091 597 600 579.091 600 557V237C600 214.909 582.091 197 560 197H440C417.909 197 400 179.091 400 157V40Z"
                fill="currentColor"
              />

              <circle
                id="scroll-emphisize-circle"
                className="stroke-neutral-50 dark:stroke-neutral-400"
                cx="300"
                cy="298.5"
                r="60"
                fill="none"
                stroke-width="7"
                pathLength="100"
              />
            </svg>
          </div>
          <div className="w-full space-y-8">
            <h3 className="text-neutral-700 dark:text-neutral-400 text-6xl">
              Emphasize scroll
            </h3>
            <p className="text-neutral-700 dark:text-neutral-400 text-3xl">
              For this project I’ve used Javascript and CSS to indicate if the
              page is scrollable. This implementation is focused on blogposts
              with multiple paragraphs and images.
            </p>
            <div className="py-3 text-center bg-neutral-700 rounded-[40px] w-2/3">
              <span className="text-3xl text-neutral-50 dark:text-neutral-400">
                Visit project
              </span>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
}
