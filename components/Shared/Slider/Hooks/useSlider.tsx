import { useState, useCallback, useMemo } from 'react';

const useSlider = (offset: number, slideCount: number) => {
  const [activeSlide, setACtive] = useState(0);

  const updateIndex = useCallback(newIndex => {
    setACtive(newIndex);
  }, []);

  const nextSlide = useMemo(
    () => ({
      disabled: activeSlide + offset >= slideCount,
      onClick: () => {
        updateIndex(activeSlide + 1);
      },
    }),
    [activeSlide, offset, slideCount, updateIndex]
  );

  const previousSlide = useMemo(
    () => ({
      disabled: activeSlide === -offset,
      onClick: () => {
        updateIndex(activeSlide - 1);
      },
    }),
    [activeSlide, updateIndex]
  );

  return { nextSlide, previousSlide, activeSlide };
};

export default useSlider;
