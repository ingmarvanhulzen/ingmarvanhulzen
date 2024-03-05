import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollContainer from "@/components/ScrollContainer";
import LetterJuggler from "@/components/LetterJuggler";

function Banner() {
  return (
    <svg viewBox="0 0 1357 160" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  );
}

function Project({
  href,
  title,
  children,
  newMin,
  oldMin,
  newRange,
  oldRange,
  hideTitle,
}: {
  href: string;
  title: string;
  children: ReactNode;
  newMin: number;
  oldMin: number;
  newRange: number;
  oldRange: number;
  hideTitle?: boolean;
}) {
  return (
    <Link
      href={href}
      title={title}
      className="relative block rounded-2xl aspect-video overflow-hidden will-change-transform bg-neutral-700 dark:bg-neutral-900"
      style={
        {
          "--oldMin": oldMin, // start after 0.25
          "--newRange": newRange, // position we want to animate to
          "--oldRange": oldRange, // time of animation
          "--newMin": newMin,
          "--oldValue":
            "min(max(var(--scroll-top), var(--oldMin)), var(--oldRange) + var(--oldMin))", // Clamp oldValue <= oldMin + oldRange
          scale: `calc((var(--oldValue) - var(--oldMin)) * var(--newRange) / var(--oldRange) + var(--newMin))`,
        } as React.CSSProperties
      }
    >
      {children}
      {!hideTitle && (
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h4 className="text-bold text-neutral-50 text-2xl md:text-4xl lg:text-5xl">
            {title}
          </h4>
        </div>
      )}
    </Link>
  );
}

export default function Page() {
  return (
    <ScrollContainer
      direction="top-down"
      className="w-full min-h-screen max-h-screen overflow-y-auto overflow-x-hidden scroll-smooth [--scroll-top:0]"
    >
      <div className="min-h-screen w-4/5 mx-auto max-w-screen-3xl">
        <div className="flex items-center min-h-screen">
          <div className="w-full m-auto space-y-6 text-neutral-700 dark:text-neutral-50">
            <Banner />
            <h3 className="text-center text-xl md:text-3xl">
              Software Engineer from Utrecht
            </h3>
          </div>
        </div>

        <div className="min-h-screen">
          <Project
            title="SQUARE REVEAL ANIMATION"
            href="/work/squarereveal"
            oldMin={0}
            newRange={0.2}
            oldRange={0.75}
            newMin={0.8}
          >
            <div className="overflow-hidden absolute inset-1">
              <Image
                src="/ricardo-gomez-angel-5YM26lUicfU-unsplash.jpg"
                alt="Unsplash picture"
                className="object-cover object-bottom"
                fill
              />
              <div className="absolute inset-0 bg-black/75" />
            </div>
            <div className="absolute inset-0 grid grid-cols-5 grid-rows-3 [--size:0.5rem] md:[--size:0.75rem] lg:[--size:1rem]">
              {Array.from({ length: 5 * 3 }).map((_, idx) => (
                <div
                  key={idx}
                  className="relative before:absolute before:inset-2 before:rounded before:shadow-outer text-neutral-700 dark:text-neutral-900 md:before:inset-3 md:before:rounded-xl lg:before:inset-4 lg:before:rounded-2xl"
                />
              ))}
            </div>
          </Project>
        </div>
        <div className="min-h-screen">
          <Project
            title="LETTER JUGGLER"
            href="/work/letterjuggler"
            oldMin={1}
            newRange={0.2}
            oldRange={0.75}
            newMin={0.8}
          >
            <div className="absolute inset-0 px-2">
              <LetterJuggler className="leading-normal text-justify text-base text-neutral-950 dark:text-neutral-700 sm:text-2xl  md:text-4xl lg:text-5xl">
                y v n w a h i x y p m y a z k h o y n n m x h v e q d f w v m x
                a g k z i p o p t l y c s r r n s u d h i h j v m c p o e z m v
                y z y b a p c v o b h u u m k j r s v r c k d t a x s l j i e x
                w q e w r p j g x n d z t f s k k o a k s f m m o b n g z d l u
                j n l o q h a e l n y r y a u g s a a x h m c v q x o u w r p q
                o z y a n r z u v v m r o r m q d e q v t t c e e u d v q p n r
                h b q w p s e o q q l z u l i l p v a h u o j g z c m d j a z a
                n z s l c o o x l m z m o x x w a x y l d x t z w d g v u h t r
                y p r g h b e a l d a r w n v o a y y a a f q n y x m z j u i s
                a i k j n d q a w f z j m k j g m y m s x j q e o a r q g x t o
                z q f w t n m h v u m i y w m g j u r l s o c x n w w g t l p i
                d z v v t a i k d v s q k p c l q x s k p e w s c x h v s p g d
                o s j l j c i i d p h b g d l y a n t d o a a i c r a k b c e f
                k d w c z g t u w h h v v x g j t z p e x q j y a s y y n u l u
                e w u x v o h q p c l u y s c j r l a o l e o x n y j e c p i h
                m e p g k o m x x f q b v l j l u e w p h y w p d m y k b v k h
                e m v m z t l j i h v u c v m b m h r u a z w c i m m r g z u x
                r b s a e n x u n p h c o e y k e d d x i v w w n w s w e v a w
                f n v p x p h l h r j t w k s s a q p h e x i a e b p k d d n g
                x d y j m w s q j a x t m f h q t p j w f x a a f v i b w u s i
                a x r c t h l w n i f p y g k i y p t u b p u s k k b r c v p m
              </LetterJuggler>
            </div>
          </Project>
        </div>
      </div>
    </ScrollContainer>
  );
}
