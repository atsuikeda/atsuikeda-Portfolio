// workCard、workItem、workSliderを各個別に型定義する。今はまとめて1つになっている

export type WorkType = {
  id?: string;
  title?: string;
  description?: string;
  imageSrc: string;
};


export const works: WorkType[] = [
  {
    id: "1",
    title: "work item title1",
    description: "1制作物の説明です。",
    imageSrc: "https://picsum.photos/400/200",
  },
  {
    id: "2",
    title: "work item title2",
    description: "2制作物の説明です。",
    imageSrc: "https://picsum.photos/400/200",
  },
  {
    id: "3",
    title: "work item title3",
    description: "3制作物の説明です。",
    imageSrc: "https://picsum.photos/400/200",
  },
];