
import { MicroCMSImage } from "microcms-js-sdk";

export type WorksType = {
  id: string;
  title: string;
  image: MicroCMSImage;
  imgAlt: string;
  link: string;
};

export type WorkSliderType = {
  id: string;
  image: MicroCMSImage;
  imgAlt: string;
};

export type WorkItemType = {
  id: string;
  title: string;
  description: string;
  image: MicroCMSImage;
  imgAlt: string;
  link: string;
};
