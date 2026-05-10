import type { CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
import { PawPrint, Play, Sparkles, Lock, ArrowRight, CheckCircle2, Trophy } from "lucide-react";
import { BusavaTragaGameSection } from "@/components/BusavaTragaGameSection";

const navItems = [
  { label: "Како се игра", id: "how-to" },
  { label: "Пробај", id: "tracing" },
  { label: "Награди", id: "rewards" },
] as const;

const steps = [
  {
    title: "Следи ја патеката",
    description: "Провлечи со прстче или глувче по меката трага и држи се до линијата.",
  },
  {
    title: "Отклучи букви",
    description: "Секоја успешно испишана буква открива нова бушава станица низ азбуката.",
  },
  {
    title: "Собирај значки",
    description: "За секое точно движење добиваш срценца, ѕвезди и нови мали награди.",
  },
] as const;

const rewards = [
  { label: "Љубопитно шепче", tone: "#FFD23F" },
  { label: "Храбра трага", tone: "#FF6B35" },
  { label: "Азбучен истражувач", tone: "#64B5F6" },
] as const;

const previewLetters = [
  {
    value: "А",
    className: "left-[56px] top-[52px] sm:left-[72px] sm:top-[56px]",
    tone: "#FF6B35",
    rotate: "-8deg",
    rotateMid: "-4deg",
    floatY: "-8px",
    duration: "3.7s",
    delay: "0s",
  },
  {
    value: "Љ",
    className: "right-[58px] top-[56px] sm:right-[72px] sm:top-[58px]",
    tone: "#6A0F3D",
    rotate: "6deg",
    rotateMid: "10deg",
    floatY: "-12px",
    duration: "3.9s",
    delay: "0.4s",
  },
  {
    value: "М",
    className: "left-[78px] bottom-[62px] sm:left-[92px] sm:bottom-[68px]",
    tone: "#64B5F6",
    rotate: "-6deg",
    rotateMid: "-1deg",
    floatY: "-9px",
    duration: "4.1s",
    delay: "0.8s",
  },
  {
    value: "Ш",
    className: "right-[70px] bottom-[54px] sm:right-[90px] sm:bottom-[60px]",
    tone: "#002B5B",
    rotate: "8deg",
    rotateMid: "12deg",
    floatY: "-11px",
    duration: "3.8s",
    delay: "1.2s",
  },
] as const;

const tracingLetters = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Ѓ",
  "Е",
  "Ж",
  "З",
  "Ѕ",
  "И",
  "Ј",
  "К",
  "Л",
  "Љ",
  "М",
];

const selectedTracingLetter = "Б";

const tracingRewards = [
  {
    title: "Љубопитно шепче",
    detail: "Заврши буква и отклучи магична значка.",
  },
  {
    title: "Срцева чест",
    detail: "Собери ѕвезди и отклучи нови изненадувања.",
  },
  {
    title: "Патека на шампиони",
    detail: "Напредувај низ нивоата со радост и боја.",
  },
];

const decorativeLetters = [
  {
    value: "А",
    left: "3%",
    top: "6rem",
    size: "46px",
    color: "#6A0F3D",
    opacity: 0.14,
    rotate: "-4deg",
    rotateMid: "1deg",
    moveX: "6px",
    duration: "4.6s",
    delay: "0s",
  },
  {
    value: "Б",
    left: "18%",
    top: "7.5rem",
    size: "74px",
    color: "#64B5F6",
    opacity: 0.11,
    rotate: "3deg",
    rotateMid: "7deg",
    moveX: "8px",
    duration: "6.2s",
    delay: "0.2s",
  },
  {
    value: "В",
    left: "38%",
    top: "5.5rem",
    size: "52px",
    color: "#FF6B35",
    opacity: 0.14,
    rotate: "-3deg",
    rotateMid: "2deg",
    moveX: "7px",
    duration: "5.4s",
    delay: "0.4s",
  },
  {
    value: "Г",
    right: "12%",
    top: "6rem",
    size: "60px",
    color: "#EE4266",
    opacity: 0.12,
    rotate: "4deg",
    rotateMid: "8deg",
    moveX: "-7px",
    duration: "5.8s",
    delay: "0.6s",
  },
  {
    value: "Д",
    right: "3%",
    top: "10rem",
    size: "44px",
    color: "#004E89",
    opacity: 0.18,
    rotate: "-2deg",
    rotateMid: "2deg",
    moveX: "-6px",
    duration: "4.9s",
    delay: "0.8s",
  },
  {
    value: "Ѓ",
    left: "7%",
    top: "17rem",
    size: "56px",
    color: "#64B5F6",
    opacity: 0.14,
    rotate: "2deg",
    rotateMid: "5deg",
    moveX: "8px",
    duration: "6.7s",
    delay: "1s",
  },
  {
    value: "Е",
    left: "28%",
    top: "15rem",
    size: "88px",
    color: "#6A0F3D",
    opacity: 0.1,
    rotate: "-4deg",
    rotateMid: "0deg",
    moveX: "6px",
    duration: "7.4s",
    delay: "1.2s",
  },
  {
    value: "Ж",
    left: "47%",
    top: "18rem",
    size: "48px",
    color: "#EE4266",
    opacity: 0.15,
    rotate: "3deg",
    rotateMid: "7deg",
    moveX: "7px",
    duration: "4.8s",
    delay: "1.4s",
  },
  {
    value: "З",
    right: "28%",
    top: "16rem",
    size: "76px",
    color: "#004E89",
    opacity: 0.1,
    rotate: "-3deg",
    rotateMid: "2deg",
    moveX: "-8px",
    duration: "6.6s",
    delay: "1.6s",
  },
  {
    value: "Ѕ",
    right: "8%",
    top: "21rem",
    size: "58px",
    color: "#FF6B35",
    opacity: 0.16,
    rotate: "4deg",
    rotateMid: "8deg",
    moveX: "-7px",
    duration: "5.3s",
    delay: "1.8s",
  },
  {
    value: "И",
    left: "11%",
    top: "31rem",
    size: "70px",
    color: "#FFB3C7",
    opacity: 0.12,
    rotate: "-3deg",
    rotateMid: "1deg",
    moveX: "6px",
    duration: "5.7s",
    delay: "2s",
  },
  {
    value: "Ј",
    left: "34%",
    top: "34rem",
    size: "50px",
    color: "#004E89",
    opacity: 0.17,
    rotate: "2deg",
    rotateMid: "6deg",
    moveX: "8px",
    duration: "4.7s",
    delay: "2.2s",
  },
  {
    value: "К",
    right: "22%",
    top: "36rem",
    size: "84px",
    color: "#6A0F3D",
    opacity: 0.1,
    rotate: "-4deg",
    rotateMid: "0deg",
    moveX: "-6px",
    duration: "7.1s",
    delay: "2.4s",
  },
  {
    value: "Л",
    right: "5%",
    top: "40rem",
    size: "46px",
    color: "#64B5F6",
    opacity: 0.18,
    rotate: "3deg",
    rotateMid: "7deg",
    moveX: "-8px",
    duration: "5.2s",
    delay: "2.6s",
  },
  {
    value: "Љ",
    left: "6%",
    top: "54rem",
    size: "64px",
    color: "#FF6B35",
    opacity: 0.14,
    rotate: "-2deg",
    rotateMid: "2deg",
    moveX: "7px",
    duration: "6.8s",
    delay: "2.8s",
  },
  {
    value: "М",
    left: "26%",
    top: "60rem",
    size: "44px",
    color: "#EE4266",
    opacity: 0.17,
    rotate: "4deg",
    rotateMid: "8deg",
    moveX: "8px",
    duration: "4.9s",
    delay: "3s",
  },
  {
    value: "Н",
    right: "30%",
    top: "64rem",
    size: "90px",
    color: "#64B5F6",
    opacity: 0.1,
    rotate: "-4deg",
    rotateMid: "1deg",
    moveX: "-7px",
    duration: "7.8s",
    delay: "3.2s",
  },
  {
    value: "Њ",
    right: "8%",
    top: "71rem",
    size: "52px",
    color: "#6A0F3D",
    opacity: 0.18,
    rotate: "3deg",
    rotateMid: "7deg",
    moveX: "-6px",
    duration: "5.5s",
    delay: "3.4s",
  },
  {
    value: "О",
    left: "14%",
    top: "86rem",
    size: "78px",
    color: "#004E89",
    opacity: 0.11,
    rotate: "-3deg",
    rotateMid: "2deg",
    moveX: "8px",
    duration: "6.4s",
    delay: "3.6s",
  },
  {
    value: "П",
    right: "16%",
    top: "94rem",
    size: "56px",
    color: "#FFB3C7",
    opacity: 0.14,
    rotate: "4deg",
    rotateMid: "8deg",
    moveX: "-8px",
    duration: "5.8s",
    delay: "3.8s",
  },
] as const;

const backgroundPaws = [
  {
    left: "4%",
    top: "11rem",
    size: "54px",
    color: "#6A0F3D",
    opacity: 0.24,
    rotate: "-6deg",
    rotateMid: "-1deg",
    moveX: "7px",
    duration: "5.8s",
    delay: "0.2s",
  },
  {
    left: "24%",
    top: "9rem",
    size: "44px",
    color: "#64B5F6",
    opacity: 0.18,
    rotate: "4deg",
    rotateMid: "8deg",
    moveX: "8px",
    duration: "6.6s",
    delay: "0.5s",
  },
  {
    left: "52%",
    top: "11rem",
    size: "58px",
    color: "#FF6B35",
    opacity: 0.2,
    rotate: "-5deg",
    rotateMid: "-1deg",
    moveX: "8px",
    duration: "7.1s",
    delay: "0.8s",
  },
  {
    right: "10%",
    top: "12rem",
    size: "62px",
    color: "#EE4266",
    opacity: 0.22,
    rotate: "5deg",
    rotateMid: "9deg",
    moveX: "-7px",
    duration: "6.2s",
    delay: "1.1s",
  },
  {
    left: "6%",
    top: "24rem",
    size: "48px",
    color: "#004E89",
    opacity: 0.18,
    rotate: "-4deg",
    rotateMid: "0deg",
    moveX: "6px",
    duration: "5.9s",
    delay: "1.4s",
  },
  {
    left: "42%",
    top: "22rem",
    size: "76px",
    color: "#6A0F3D",
    opacity: 0.16,
    rotate: "6deg",
    rotateMid: "10deg",
    moveX: "8px",
    duration: "7.4s",
    delay: "1.7s",
  },
  {
    right: "20%",
    top: "28rem",
    size: "52px",
    color: "#64B5F6",
    opacity: 0.2,
    rotate: "-5deg",
    rotateMid: "-1deg",
    moveX: "-6px",
    duration: "5.3s",
    delay: "2s",
  },
  {
    right: "4%",
    top: "34rem",
    size: "46px",
    color: "#FF6B35",
    opacity: 0.21,
    rotate: "4deg",
    rotateMid: "8deg",
    moveX: "-6px",
    duration: "6.8s",
    delay: "2.3s",
  },
  {
    left: "16%",
    top: "48rem",
    size: "72px",
    color: "#EE4266",
    opacity: 0.16,
    rotate: "-6deg",
    rotateMid: "-1deg",
    moveX: "7px",
    duration: "7.2s",
    delay: "2.6s",
  },
  {
    left: "58%",
    top: "46rem",
    size: "42px",
    color: "#004E89",
    opacity: 0.19,
    rotate: "5deg",
    rotateMid: "9deg",
    moveX: "8px",
    duration: "5.1s",
    delay: "2.9s",
  },
  {
    right: "14%",
    top: "56rem",
    size: "64px",
    color: "#6A0F3D",
    opacity: 0.24,
    rotate: "-4deg",
    rotateMid: "0deg",
    moveX: "-8px",
    duration: "6.5s",
    delay: "3.2s",
  },
  {
    left: "8%",
    top: "74rem",
    size: "50px",
    color: "#64B5F6",
    opacity: 0.18,
    rotate: "6deg",
    rotateMid: "10deg",
    moveX: "6px",
    duration: "5.7s",
    delay: "3.5s",
  },
  {
    left: "40%",
    top: "88rem",
    size: "68px",
    color: "#FF6B35",
    opacity: 0.2,
    rotate: "-5deg",
    rotateMid: "-1deg",
    moveX: "8px",
    duration: "7.3s",
    delay: "3.8s",
  },
  {
    right: "6%",
    top: "92rem",
    size: "56px",
    color: "#EE4266",
    opacity: 0.22,
    rotate: "5deg",
    rotateMid: "9deg",
    moveX: "-7px",
    duration: "6.1s",
    delay: "4.1s",
  },
] as const;

type BackgroundDecorationBase = {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  size: string;
  color: string;
  opacity: number;
  rotate: string;
  rotateMid: string;
  moveX: string;
  moveY: string;
  duration: string;
  delay: string;
};

type BackgroundLetterDecoration = BackgroundDecorationBase & {
  value: string;
};

const pageBackgroundLetters = [
  {
    value: "А",
    left: "3%",
    top: "5.5rem",
    size: "100px",
    color: "#6A0F3D",
    opacity: 0.24,
    rotate: "-5deg",
    rotateMid: "-1deg",
    moveX: "9px",
    moveY: "-16px",
    duration: "6.4s",
    delay: "0s",
  },
  {
    value: "Б",
    left: "22%",
    top: "4.25rem",
    size: "88px",
    color: "#64B5F6",
    opacity: 0.21,
    rotate: "4deg",
    rotateMid: "7deg",
    moveX: "11px",
    moveY: "-18px",
    duration: "7.2s",
    delay: "0.2s",
  },
  {
    value: "В",
    left: "39%",
    top: "6rem",
    size: "84px",
    color: "#FF6B35",
    opacity: 0.18,
    rotate: "-4deg",
    rotateMid: "2deg",
    moveX: "8px",
    moveY: "-13px",
    duration: "5.9s",
    delay: "0.4s",
  },
  {
    value: "Г",
    right: "21%",
    top: "5rem",
    size: "92px",
    color: "#EE4266",
    opacity: 0.19,
    rotate: "5deg",
    rotateMid: "9deg",
    moveX: "-8px",
    moveY: "-17px",
    duration: "6.8s",
    delay: "0.6s",
  },
  {
    value: "Д",
    right: "5%",
    top: "10rem",
    size: "86px",
    color: "#004E89",
    opacity: 0.25,
    rotate: "-3deg",
    rotateMid: "2deg",
    moveX: "-9px",
    moveY: "-15px",
    duration: "6.3s",
    delay: "0.8s",
  },
  {
    value: "Ѓ",
    left: "8%",
    top: "16rem",
    size: "82px",
    color: "#64B5F6",
    opacity: 0.12,
    rotate: "3deg",
    rotateMid: "6deg",
    moveX: "10px",
    moveY: "-16px",
    duration: "6.9s",
    delay: "1s",
  },
  {
    value: "Е",
    left: "28%",
    top: "17rem",
    size: "120px",
    color: "#6A0F3D",
    opacity: 0.09,
    rotate: "-5deg",
    rotateMid: "0deg",
    moveX: "10px",
    moveY: "-20px",
    duration: "8.5s",
    delay: "1.2s",
  },
  {
    value: "Ж",
    left: "48%",
    top: "16rem",
    size: "86px",
    color: "#EE4266",
    opacity: 0.16,
    rotate: "3deg",
    rotateMid: "7deg",
    moveX: "10px",
    moveY: "-15px",
    duration: "6.2s",
    delay: "1.4s",
  },
  {
    value: "Ѕ",
    right: "23%",
    top: "16.5rem",
    size: "94px",
    color: "#004E89",
    opacity: 0.12,
    rotate: "-4deg",
    rotateMid: "1deg",
    moveX: "-10px",
    moveY: "-17px",
    duration: "7.4s",
    delay: "1.6s",
  },
  {
    value: "Л",
    right: "6%",
    top: "20rem",
    size: "98px",
    color: "#FF6B35",
    opacity: 0.18,
    rotate: "4deg",
    rotateMid: "8deg",
    moveX: "-8px",
    moveY: "-18px",
    duration: "6.7s",
    delay: "1.8s",
  },
  {
    value: "Љ",
    left: "6%",
    top: "29rem",
    size: "108px",
    color: "#FFB3C7",
    opacity: 0.11,
    rotate: "-3deg",
    rotateMid: "2deg",
    moveX: "8px",
    moveY: "-14px",
    duration: "6.8s",
    delay: "2s",
  },
  {
    value: "М",
    left: "28%",
    top: "33rem",
    size: "92px",
    color: "#004E89",
    opacity: 0.08,
    rotate: "2deg",
    rotateMid: "6deg",
    moveX: "11px",
    moveY: "-19px",
    duration: "6.4s",
    delay: "2.2s",
  },
  {
    value: "Н",
    left: "46%",
    top: "28rem",
    size: "112px",
    color: "#6A0F3D",
    opacity: 0.1,
    rotate: "-4deg",
    rotateMid: "0deg",
    moveX: "9px",
    moveY: "-20px",
    duration: "8.2s",
    delay: "2.4s",
  },
  {
    value: "Њ",
    right: "19%",
    top: "31rem",
    size: "104px",
    color: "#64B5F6",
    opacity: 0.14,
    rotate: "4deg",
    rotateMid: "8deg",
    moveX: "-9px",
    moveY: "-16px",
    duration: "6.2s",
    delay: "2.6s",
  },
  {
    value: "П",
    right: "4%",
    top: "36rem",
    size: "88px",
    color: "#FF6B35",
    opacity: 0.18,
    rotate: "-3deg",
    rotateMid: "2deg",
    moveX: "-8px",
    moveY: "-17px",
    duration: "7.1s",
    delay: "2.8s",
  },
  {
    value: "Р",
    left: "10%",
    top: "45rem",
    size: "86px",
    color: "#EE4266",
    opacity: 0.16,
    rotate: "5deg",
    rotateMid: "8deg",
    moveX: "10px",
    moveY: "-16px",
    duration: "6.3s",
    delay: "3s",
  },
  {
    value: "С",
    left: "34%",
    top: "42rem",
    size: "128px",
    color: "#64B5F6",
    opacity: 0.1,
    rotate: "-4deg",
    rotateMid: "1deg",
    moveX: "11px",
    moveY: "-20px",
    duration: "8.8s",
    delay: "3.2s",
  },
  {
    value: "Т",
    left: "53%",
    top: "46rem",
    size: "90px",
    color: "#6A0F3D",
    opacity: 0.09,
    rotate: "3deg",
    rotateMid: "7deg",
    moveX: "8px",
    moveY: "-15px",
    duration: "6.5s",
    delay: "3.4s",
  },
  {
    value: "Ф",
    right: "18%",
    top: "48rem",
    size: "118px",
    color: "#004E89",
    opacity: 0.13,
    rotate: "-3deg",
    rotateMid: "2deg",
    moveX: "-10px",
    moveY: "-18px",
    duration: "7.7s",
    delay: "3.6s",
  },
  {
    value: "Х",
    right: "3%",
    top: "53rem",
    size: "84px",
    color: "#FFB3C7",
    opacity: 0.18,
    rotate: "4deg",
    rotateMid: "9deg",
    moveX: "-9px",
    moveY: "-13px",
    duration: "6.4s",
    delay: "3.8s",
  },
  {
    value: "Ч",
    left: "4%",
    top: "60rem",
    size: "96px",
    color: "#FF6B35",
    opacity: 0.18,
    rotate: "-3deg",
    rotateMid: "2deg",
    moveX: "8px",
    moveY: "-17px",
    duration: "6.9s",
    delay: "4s",
  },
  {
    value: "Џ",
    left: "24%",
    top: "58rem",
    size: "84px",
    color: "#6A0F3D",
    opacity: 0.12,
    rotate: "4deg",
    rotateMid: "8deg",
    moveX: "9px",
    moveY: "-15px",
    duration: "7.2s",
    delay: "4.2s",
  },
  {
    value: "Ш",
    left: "44%",
    top: "61rem",
    size: "104px",
    color: "#64B5F6",
    opacity: 0.11,
    rotate: "-4deg",
    rotateMid: "0deg",
    moveX: "10px",
    moveY: "-19px",
    duration: "7.8s",
    delay: "4.4s",
  },
  {
    value: "А",
    right: "28%",
    top: "64rem",
    size: "118px",
    color: "#6A0F3D",
    opacity: 0.09,
    rotate: "3deg",
    rotateMid: "7deg",
    moveX: "-11px",
    moveY: "-20px",
    duration: "8.1s",
    delay: "4.6s",
  },
  {
    value: "Б",
    right: "9%",
    top: "69rem",
    size: "90px",
    color: "#FFB3C7",
    opacity: 0.18,
    rotate: "-4deg",
    rotateMid: "1deg",
    moveX: "-8px",
    moveY: "-15px",
    duration: "6.6s",
    delay: "4.8s",
  },
  {
    value: "Г",
    left: "12%",
    top: "79rem",
    size: "110px",
    color: "#004E89",
    opacity: 0.22,
    rotate: "-3deg",
    rotateMid: "2deg",
    moveX: "10px",
    moveY: "-19px",
    duration: "7.9s",
    delay: "5s",
  },
  {
    value: "Д",
    left: "43%",
    top: "83rem",
    size: "88px",
    color: "#FF6B35",
    opacity: 0.17,
    rotate: "4deg",
    rotateMid: "8deg",
    moveX: "8px",
    moveY: "-16px",
    duration: "6.5s",
    delay: "5.2s",
  },
  {
    value: "Л",
    right: "15%",
    top: "84rem",
    size: "102px",
    color: "#64B5F6",
    opacity: 0.22,
    rotate: "-5deg",
    rotateMid: "-1deg",
    moveX: "-10px",
    moveY: "-18px",
    duration: "7.4s",
    delay: "5.4s",
  },
  {
    value: "М",
    left: "32%",
    bottom: "13rem",
    size: "120px",
    color: "#6A0F3D",
    opacity: 0.1,
    rotate: "3deg",
    rotateMid: "6deg",
    moveX: "11px",
    moveY: "-20px",
    duration: "8.3s",
    delay: "5.6s",
  },
  {
    value: "Р",
    right: "32%",
    bottom: "11rem",
    size: "86px",
    color: "#EE4266",
    opacity: 0.12,
    rotate: "-4deg",
    rotateMid: "0deg",
    moveX: "-8px",
    moveY: "-14px",
    duration: "6.7s",
    delay: "5.8s",
  },
  {
    value: "Ш",
    right: "6%",
    bottom: "5rem",
    size: "108px",
    color: "#64B5F6",
    opacity: 0.23,
    rotate: "4deg",
    rotateMid: "9deg",
    moveX: "-9px",
    moveY: "-19px",
    duration: "7.8s",
    delay: "6s",
  },
] as const satisfies ReadonlyArray<BackgroundLetterDecoration>;

const pageBackgroundPaws = [
  {
    left: "11%",
    top: "7rem",
    size: "82px",
    color: "#64B5F6",
    opacity: 0.2,
    rotate: "-7deg",
    rotateMid: "-2deg",
    moveX: "9px",
    moveY: "-16px",
    duration: "6.6s",
    delay: "0.1s",
  },
  {
    left: "49%",
    top: "8rem",
    size: "76px",
    color: "#8FD3FF",
    opacity: 0.17,
    rotate: "5deg",
    rotateMid: "9deg",
    moveX: "7px",
    moveY: "-12px",
    duration: "5.9s",
    delay: "0.35s",
  },
  {
    right: "11%",
    top: "6.5rem",
    size: "90px",
    color: "#FF6B35",
    opacity: 0.21,
    rotate: "-6deg",
    rotateMid: "-1deg",
    moveX: "-10px",
    moveY: "-18px",
    duration: "7.4s",
    delay: "0.6s",
  },
  {
    left: "18%",
    top: "18rem",
    size: "74px",
    color: "#6A0F3D",
    opacity: 0.09,
    rotate: "4deg",
    rotateMid: "8deg",
    moveX: "7px",
    moveY: "-12px",
    duration: "6.1s",
    delay: "0.9s",
  },
  {
    left: "59%",
    top: "18rem",
    size: "84px",
    color: "#FF6B35",
    opacity: 0.14,
    rotate: "-6deg",
    rotateMid: "-1deg",
    moveX: "10px",
    moveY: "-18px",
    duration: "7.3s",
    delay: "1.2s",
  },
  {
    right: "4%",
    top: "28rem",
    size: "78px",
    color: "#FFB3C7",
    opacity: 0.18,
    rotate: "5deg",
    rotateMid: "9deg",
    moveX: "-9px",
    moveY: "-15px",
    duration: "6.7s",
    delay: "1.5s",
  },
  {
    left: "16%",
    top: "31rem",
    size: "88px",
    color: "#64B5F6",
    opacity: 0.09,
    rotate: "-5deg",
    rotateMid: "-1deg",
    moveX: "9px",
    moveY: "-14px",
    duration: "6.3s",
    delay: "1.8s",
  },
  {
    left: "56%",
    top: "32rem",
    size: "96px",
    color: "#6A0F3D",
    opacity: 0.15,
    rotate: "6deg",
    rotateMid: "10deg",
    moveX: "11px",
    moveY: "-19px",
    duration: "8.1s",
    delay: "2.1s",
  },
  {
    right: "9%",
    top: "42rem",
    size: "82px",
    color: "#8FD3FF",
    opacity: 0.17,
    rotate: "-4deg",
    rotateMid: "0deg",
    moveX: "-7px",
    moveY: "-14px",
    duration: "6.1s",
    delay: "2.4s",
  },
  {
    left: "22%",
    top: "47rem",
    size: "102px",
    color: "#EE4266",
    opacity: 0.18,
    rotate: "6deg",
    rotateMid: "10deg",
    moveX: "11px",
    moveY: "-17px",
    duration: "7s",
    delay: "2.7s",
  },
  {
    left: "63%",
    top: "44rem",
    size: "76px",
    color: "#64B5F6",
    opacity: 0.13,
    rotate: "-5deg",
    rotateMid: "-1deg",
    moveX: "8px",
    moveY: "-13px",
    duration: "6.2s",
    delay: "3s",
  },
  {
    right: "8%",
    top: "58rem",
    size: "90px",
    color: "#6A0F3D",
    opacity: 0.18,
    rotate: "6deg",
    rotateMid: "10deg",
    moveX: "-10px",
    moveY: "-20px",
    duration: "8.2s",
    delay: "3.3s",
  },
  {
    left: "14%",
    top: "65rem",
    size: "80px",
    color: "#FFB3C7",
    opacity: 0.2,
    rotate: "-5deg",
    rotateMid: "-1deg",
    moveX: "9px",
    moveY: "-16px",
    duration: "6.5s",
    delay: "3.6s",
  },
  {
    left: "52%",
    top: "67rem",
    size: "88px",
    color: "#8FD3FF",
    opacity: 0.16,
    rotate: "5deg",
    rotateMid: "9deg",
    moveX: "10px",
    moveY: "-20px",
    duration: "7.5s",
    delay: "3.9s",
  },
  {
    right: "17%",
    top: "74rem",
    size: "100px",
    color: "#FF6B35",
    opacity: 0.19,
    rotate: "-4deg",
    rotateMid: "1deg",
    moveX: "-10px",
    moveY: "-18px",
    duration: "7.8s",
    delay: "4.2s",
  },
  {
    left: "30%",
    top: "82rem",
    size: "74px",
    color: "#64B5F6",
    opacity: 0.2,
    rotate: "4deg",
    rotateMid: "8deg",
    moveX: "7px",
    moveY: "-13px",
    duration: "6s",
    delay: "4.5s",
  },
  {
    right: "4%",
    top: "87rem",
    size: "84px",
    color: "#8FD3FF",
    opacity: 0.25,
    rotate: "-6deg",
    rotateMid: "-1deg",
    moveX: "-10px",
    moveY: "-18px",
    duration: "7.2s",
    delay: "4.8s",
  },
  {
    left: "8%",
    bottom: "7rem",
    size: "78px",
    color: "#6A0F3D",
    opacity: 0.22,
    rotate: "5deg",
    rotateMid: "9deg",
    moveX: "8px",
    moveY: "-14px",
    duration: "6.4s",
    delay: "5.1s",
  },
  {
    left: "50%",
    bottom: "10rem",
    size: "92px",
    color: "#EE4266",
    opacity: 0.17,
    rotate: "5deg",
    rotateMid: "9deg",
    moveX: "10px",
    moveY: "-19px",
    duration: "7.7s",
    delay: "5.4s",
  },
  {
    right: "20%",
    bottom: "8rem",
    size: "88px",
    color: "#8FD3FF",
    opacity: 0.18,
    rotate: "6deg",
    rotateMid: "10deg",
    moveX: "-11px",
    moveY: "-18px",
    duration: "7.1s",
    delay: "5.7s",
  },
] as const satisfies ReadonlyArray<BackgroundDecorationBase>;

const rewardCards = [
  {
    label: "Љубопитно шепче",
    tone: "#FFD23F",
    icon: "🐾",
    description: "Отклучи ја првата значка кога успешно ќе ја следиш патеката на буквата.",
    unlocked: true,
    gradient: "linear-gradient(145deg, #FFF7CB 0%, #FFE18A 100%)",
    iconBg: "linear-gradient(145deg, #FFE27B 0%, #FFC95B 100%)",
    iconColor: "#7A4D00",
    glow: "rgba(255, 211, 92, 0.42)",
    shadow: "rgba(235, 174, 63, 0.28)",
  },
  {
    label: "Храбра трага",
    tone: "#FF6B35",
    icon: "✏️",
    description:
      "Освој ја оваа значка кога внимателно ќе ја нацрташ буквата без да излезеш од линијата.",
    unlocked: true,
    gradient: "linear-gradient(145deg, #FFD8EB 0%, #FFB7D0 100%)",
    iconBg: "linear-gradient(145deg, #FF9FC2 0%, #FF7FAF 100%)",
    iconColor: "#7E234A",
    glow: "rgba(255, 141, 189, 0.38)",
    shadow: "rgba(255, 120, 170, 0.24)",
  },
  {
    label: "Азбучен истражувач",
    tone: "#64B5F6",
    icon: "⭐",
    description: "Собери повеќе букви и отклучи специјална награда за твојот труд.",
    unlocked: false,
    gradient: "linear-gradient(145deg, #DDF5FF 0%, #BDE8FF 100%)",
    iconBg: "linear-gradient(145deg, #88D9FF 0%, #61BFFF 100%)",
    iconColor: "#0E4A78",
    glow: "rgba(122, 211, 255, 0.38)",
    shadow: "rgba(84, 176, 255, 0.22)",
  },
] as const;

function scrollToSection(id: (typeof navItems)[number]["id"]) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function BackgroundLetter({
  value,
  left,
  right,
  top,
  bottom,
  size,
  color,
  opacity,
  rotate,
  rotateMid,
  moveX,
  moveY,
  duration,
  delay,
}: BackgroundLetterDecoration) {
  return (
    <span
      aria-hidden
      className="background-letter pointer-events-none absolute hidden font-display font-extrabold leading-none lg:block"
      style={
        {
          left,
          right,
          top,
          bottom,
          fontSize: size,
          color,
          opacity: opacity * 0.38,
          filter: "blur(0.6px)",
          "--rotate": rotate,
          "--rotate-mid": rotateMid,
          "--move-x": moveX,
          "--move-y": moveY,
          "--duration": duration,
          "--delay": delay,
        } as CSSProperties
      }
    >
      {value}
    </span>
  );
}

function BackgroundPaw({
  left,
  right,
  top,
  bottom,
  size,
  color,
  opacity,
  rotate,
  rotateMid,
  moveX,
  moveY,
  duration,
  delay,
}: BackgroundDecorationBase) {
  return (
    <PawPrint
      aria-hidden
      className="background-paw pointer-events-none absolute hidden lg:block"
      style={
        {
          left,
          right,
          top,
          bottom,
          width: size,
          height: size,
          color,
          opacity: opacity * 0.52,
          "--rotate": rotate,
          "--rotate-mid": rotateMid,
          "--move-x": moveX,
          "--move-y": moveY,
          "--duration": duration,
          "--delay": delay,
        } as CSSProperties
      }
      strokeWidth={2}
    />
  );
}

export function BusavaTragaPage() {
  const unlockedRewards = rewardCards.filter((reward) => reward.unlocked).length;

  return (
    <main
      className="busava-traga-page min-h-screen overflow-x-hidden text-[#252946]"
      style={{
        background: [
          "radial-gradient(circle at 22% 12%, rgba(207,237,255,0.95), rgba(207,237,255,0) 34%)",
          "radial-gradient(circle at 32% 100%, rgba(179,225,184,0.60), rgba(179,225,184,0) 34%)",
          "radial-gradient(circle at 100% 22%, rgba(255,210,226,0.78), rgba(255,210,226,0) 38%)",
          "linear-gradient(110deg, #d8efff 0%, #fbf5da 46%, #f8dbe8 100%)",
        ].join(", "),
      }}
    >
      <div className="relative min-h-screen">
        <div className="background-decorations">
          {pageBackgroundLetters.map((letter) => (
            <BackgroundLetter
              key={`${letter.value}-${letter.top ?? letter.bottom}-${letter.left ?? letter.right}`}
              {...letter}
            />
          ))}

          {pageBackgroundPaws.map((paw) => (
            <BackgroundPaw key={`${paw.top ?? paw.bottom}-${paw.left ?? paw.right}`} {...paw} />
          ))}

          <div
            aria-hidden
            className="pointer-events-none absolute left-[-8rem] top-[9rem] h-[24rem] w-[24rem] rounded-full blur-3xl"
            style={{ background: "rgba(100,181,246,0.18)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-6rem] left-[20%] h-[22rem] w-[22rem] rounded-full blur-3xl"
            style={{ background: "rgba(159,217,164,0.24)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-[-8rem] top-[7rem] h-[26rem] w-[26rem] rounded-full blur-3xl"
            style={{ background: "rgba(255,195,220,0.24)" }}
          />
        </div>

        <header className="h-[105px] w-full px-5 pt-5 sm:px-8 lg:px-[50px]">
          <div className="relative flex items-start justify-between">
            <Link to="/" className="inline-flex items-center gap-3 pt-[4px]">
              <span className="inline-flex h-[54px] w-[54px] items-center justify-center rounded-[18px] bg-white/88 shadow-[0_12px_26px_rgba(37,41,70,0.10)]">
                <PawPrint className="h-6 w-6 text-[#FF6B35]" strokeWidth={2.3} />
              </span>
              <span className="font-display text-[1.9rem] font-extrabold leading-none tracking-[-0.03em]">
                <span className="text-[#002B5B]">Бушава</span>{" "}
                <span className="text-[#6A0F3D]">Трага</span>
              </span>
            </Link>

            <nav className="absolute left-1/2 top-[6px] hidden -translate-x-1/2 items-center rounded-full border border-white/90 bg-white/72 p-2 shadow-[0_16px_38px_rgba(37,41,70,0.08)] backdrop-blur-xl md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="min-h-11 rounded-full px-5 py-2.5 text-[15px] font-bold text-[#252946] transition-colors hover:bg-white"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => scrollToSection("tracing")}
              className="inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-[15px] font-extrabold text-white shadow-[0_18px_34px_rgba(255,107,53,0.28)] transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "#FF6B35" }}
            >
              Започни
            </button>
          </div>
        </header>

        <section
          id="preview"
          className="relative grid gap-10 px-5 pb-8 pt-7 sm:px-8 lg:grid-cols-[minmax(540px,1fr)_minmax(0,560px)] lg:items-start lg:gap-8 lg:pl-[140px] lg:pr-[130px] lg:pt-[28px] xl:pb-10"
        >
          <div className="hero-content max-w-[640px] lg:pt-[78px]">
            <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/88 bg-white/74 px-4 py-2 text-[13px] font-bold text-[#002B5B] shadow-[0_10px_24px_rgba(37,41,70,0.07)] backdrop-blur-lg">
              <Sparkles className="h-3.5 w-3.5 text-[#FF6B35]" strokeWidth={2.4} />
              Нова игра за бушавите умови
            </span>

            <div className="relative mt-6 inline-flex items-start">
              <h1 className="font-display text-[4rem] font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-[5.15rem] lg:whitespace-nowrap lg:text-[88px] xl:text-[92px]">
                <span className="text-[#6A0F3D]">Бушава</span>{" "}
                <span className="text-[#002B5B]">Трага</span>
              </h1>
            </div>

            <p className="mt-6 max-w-[35rem] text-[1.24rem] font-bold leading-relaxed text-[#30415D] sm:text-[1.55rem]">
              Следи ја трагата и научи да пишуваш букви!
            </p>

            <p className="mt-4 max-w-[34rem] text-[1.02rem] leading-7 text-[#6C6B67] sm:text-[1.08rem]">
              Цртај со прстче или глувче и следи ги бушавите патеки низ македонската азбука.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollToSection("tracing")}
                className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-[22px] px-6 py-3.5 text-base font-extrabold text-white shadow-[0_18px_36px_rgba(63,162,246,0.30)] transition-transform hover:-translate-y-1"
                style={{ backgroundColor: "#3FA2F6" }}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/16">
                  <Play className="ml-0.5 h-[18px] w-[18px] fill-current" />
                </span>
                Започни
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("how-to")}
                className="inline-flex min-h-[58px] items-center justify-center rounded-[22px] border border-white/90 bg-white/88 px-6 py-3.5 text-base font-extrabold text-[#252946] shadow-[0_14px_30px_rgba(37,41,70,0.10)] transition-transform hover:-translate-y-1"
              >
                Како се игра?
              </button>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <div className="flex items-center">
                {[0, 1, 2].map((index) => (
                  <span
                    key={index}
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white/82 text-[#FF6B35] shadow-[0_10px_18px_rgba(37,41,70,0.08)] ${
                      index === 0 ? "" : "-ml-2.5"
                    }`}
                  >
                    <PawPrint className="h-5 w-5" strokeWidth={2.3} />
                  </span>
                ))}
              </div>
              <p className="text-sm font-bold text-[#4C5268] sm:text-base">
                Веќе играат над 1.000 мали истражувачи
              </p>
            </div>
          </div>

          <div className="preview-card mx-auto w-full max-w-[560px] lg:mt-[80px] lg:w-[560px] lg:max-w-[40vw] lg:justify-self-end">
            <span className="absolute right-[24px] top-[18px] z-20 rotate-[9deg] rounded-full bg-[#FFD23F] px-5 py-3 text-sm font-extrabold text-[#252946] shadow-[0_18px_34px_rgba(255,210,63,0.42)]">
              ⭐ +1 значка!
            </span>

            <span className="absolute -bottom-[10px] left-[8px] z-20 rounded-full bg-white/94 px-5 py-3 text-sm font-extrabold text-[#6A0F3D] shadow-[0_18px_34px_rgba(37,41,70,0.12)]">
              💗 Одлично!
            </span>

            <div className="relative h-[440px] w-full overflow-hidden rounded-[42px] border border-white/75 bg-white/44 p-5 shadow-[0_35px_100px_rgba(37,41,70,0.15)] backdrop-blur-2xl sm:h-[470px] lg:h-[500px] lg:w-[560px]">
              <div className="absolute inset-[18px] rounded-[36px] border border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.78),rgba(255,255,255,0.42))]" />

              <div className="relative h-full overflow-hidden rounded-[36px] bg-[radial-gradient(circle_at_50%_22%,rgba(255,255,255,0.92),rgba(255,255,255,0.58)_56%,rgba(255,255,255,0.34)_100%)]">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[54%]">
                  <span
                    className="main-letter font-display text-[11rem] font-extrabold leading-none text-[#6A0F3D] sm:text-[13rem] lg:text-[260px]"
                    style={{ textShadow: "18px 18px 0 #F6CBD8" }}
                  >
                    Ѕ
                  </span>
                </span>

                {previewLetters.map((letter) => (
                  <span
                    key={letter.value}
                    className={`preview-letter absolute font-display text-[2.6rem] font-extrabold leading-none sm:text-[3rem] ${letter.className}`}
                    style={
                      {
                        color: letter.tone,
                        "--rotate": letter.rotate,
                        "--rotate-mid": letter.rotateMid,
                        "--float-y": letter.floatY,
                        "--float-duration": letter.duration,
                        animationDelay: letter.delay,
                      } as CSSProperties
                    }
                  >
                    {letter.value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="px-5 pb-10 pt-2 sm:px-8 lg:px-[140px] lg:pr-[140px]">
          <section
            id="how-to"
            className="grid gap-5 rounded-[2.25rem] border border-white/65 bg-white/54 p-5 shadow-[0_24px_70px_rgba(37,41,70,0.08)] backdrop-blur-xl sm:p-7 lg:grid-cols-3"
          >
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.9rem] bg-white/84 p-6 shadow-[0_18px_40px_rgba(37,41,70,0.08)]"
              >
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl font-display text-2xl font-extrabold text-white"
                  style={{
                    backgroundColor: index === 1 ? "#FFD23F" : index === 2 ? "#6A0F3D" : "#002B5B",
                  }}
                >
                  {index + 1}
                </span>
                <h2 className="mt-4 font-display text-2xl font-extrabold text-[#252946]">
                  {step.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-[#252946]/78">{step.description}</p>
              </article>
            ))}
          </section>

          <section
            id="rewards"
            className="relative mt-6 overflow-hidden rounded-[2.8rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.38),rgba(250,247,255,0.28))] p-1 shadow-[0_30px_90px_rgba(37,41,70,0.14)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,230,148,0.26),transparent_24%),radial-gradient(circle_at_top_right,rgba(132,215,255,0.24),transparent_28%),radial-gradient(circle_at_bottom,rgba(255,175,206,0.22),transparent_32%)]" />
            <div className="pointer-events-none absolute left-[3%] top-[14%] hidden rounded-full bg-white/14 p-3 text-white/65 shadow-[0_10px_28px_rgba(255,255,255,0.12)] lg:block">
              <PawPrint className="h-5 w-5" />
            </div>
            <div className="pointer-events-none absolute right-[6%] top-[10%] hidden rounded-full bg-white/14 p-3 text-white/65 shadow-[0_10px_28px_rgba(255,255,255,0.12)] lg:block">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="pointer-events-none absolute bottom-[12%] right-[10%] hidden rounded-full bg-white/12 p-3 text-white/55 shadow-[0_10px_28px_rgba(255,255,255,0.10)] lg:block">
              <PawPrint className="h-4 w-4" />
            </div>

            <div className="relative rounded-[calc(2.8rem-4px)] border border-white/45 bg-[linear-gradient(145deg,rgba(106,15,61,0.88),rgba(42,95,168,0.90)_52%,rgba(101,189,255,0.78))] p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24)] sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(16rem,0.75fr)] lg:items-start">
                <div>
                  <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/12 px-4 py-2 shadow-[0_12px_30px_rgba(24,36,73,0.14)]">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#FFE27A,#FFB84D)] text-[#7A4300] shadow-[0_14px_28px_rgba(255,190,89,0.35)]">
                      <Trophy className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/88">
                      Собирај значки
                    </span>
                  </div>

                  <h2 className="mt-5 max-w-[24rem] font-display text-[2.35rem] font-extrabold leading-[1.02] text-white sm:text-[3rem]">
                    Мали значки за големи трагачи
                  </h2>
                  <p className="mt-4 max-w-[34rem] text-[1.02rem] leading-7 text-white/78 sm:text-[1.08rem]">
                    Секој внимателен потег носи нова пофалба, срце и бушава значка што ја прави играта уште повесела.
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/20 bg-white/12 p-5 shadow-[0_18px_40px_rgba(24,36,73,0.14)] backdrop-blur-md">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">Отклучено</p>
                      <p className="mt-2 font-display text-3xl font-extrabold text-white">
                        {unlockedRewards} / {rewardCards.length}
                      </p>
                    </div>
                    <span className="rounded-full bg-white/16 px-3 py-1 text-xs font-extrabold text-white/88 shadow-sm">
                      Ново ниво
                    </span>
                  </div>

                  <div className="mt-5 overflow-hidden rounded-full bg-white/14 p-1.5 shadow-[inset_0_2px_5px_rgba(0,0,0,0.12)]">
                    <div
                      className="h-3 rounded-full bg-[linear-gradient(90deg,#FFE27B_0%,#FF9EC4_46%,#8AD9FF_100%)] shadow-[0_0_26px_rgba(255,226,123,0.30)]"
                      style={{ width: `${(unlockedRewards / rewardCards.length) * 100}%` }}
                    />
                  </div>

                  <p className="mt-4 text-sm leading-6 text-white/72">
                    Продолжи да играш за да ги отклучиш сите награди и да ја наполниш витрината со бушави значки.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {rewardCards.map((reward) => (
                  <article
                    key={reward.label}
                    className="group relative h-full rounded-[2rem] p-[1px] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.015]"
                    style={{
                      background: `linear-gradient(180deg, rgba(255,255,255,0.92), ${reward.glow})`,
                      boxShadow: `0 22px 44px ${reward.shadow}`,
                    }}
                  >
                    <div
                      className="relative flex h-full min-h-[21.5rem] flex-col rounded-[calc(2rem-1px)] border border-white/60 px-6 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
                      style={{ background: reward.gradient }}
                    >
                      <div className="absolute inset-x-6 top-0 h-20 rounded-b-[2rem] bg-white/25 blur-2xl" />

                      <div className="relative flex items-start justify-between gap-4">
                        <span
                          className="inline-flex h-[5.8rem] w-[5.8rem] items-center justify-center rounded-full text-[2.4rem] shadow-[0_18px_36px_rgba(37,41,70,0.16)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-3"
                          style={{
                            background: reward.iconBg,
                            color: reward.iconColor,
                            boxShadow: `0 0 0 10px rgba(255,255,255,0.38), 0 20px 38px ${reward.glow}`,
                          }}
                        >
                          <span className="leading-none">{reward.icon}</span>
                        </span>
                        <span
                          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-extrabold shadow-sm ${
                            reward.unlocked
                              ? "bg-white/70 text-[#7A3D12]"
                              : "bg-white/55 text-[#54657E]"
                          }`}
                        >
                          {reward.unlocked ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Lock className="h-3.5 w-3.5" />}
                          {reward.unlocked ? "Отклучена" : "Заклучена"}
                        </span>
                      </div>

                      <div className="relative mt-7 flex flex-1 flex-col">
                        <h3 className="font-display text-[2rem] font-extrabold leading-[1.08] text-[#173D6B]">
                          {reward.label}
                        </h3>
                        <p className="mt-4 text-[1rem] leading-7 text-[#4E6480]">
                          {reward.description}
                        </p>

                        <div className="mt-auto pt-6">
                          <div className="overflow-hidden rounded-full bg-white/70 p-1.5 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8)]">
                            <div
                              className="h-2.5 rounded-full transition-all duration-300"
                              style={{
                                width: reward.unlocked ? "100%" : "48%",
                                background: reward.iconBg,
                              }}
                            />
                          </div>
                          <p className="mt-3 text-sm font-bold text-[#5C7190]">
                            {reward.unlocked ? "Наградата е освоена" : "Скоро е подготвена за отклучување"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <BusavaTragaGameSection />

          <section className="mt-8 overflow-hidden rounded-[2.5rem] border border-white/70 bg-[linear-gradient(135deg,#6A0F3D_0%,#1B4B91_55%,#63C5FF_100%)] p-6 text-white shadow-[0_30px_80px_rgba(37,41,70,0.16)] sm:p-8 lg:p-10">
            <div className="relative">
              <div className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-white/12 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-10 right-0 h-36 w-36 rounded-full bg-[#FFD86C]/25 blur-3xl" />

              <div className="relative mx-auto max-w-3xl text-center">
                <p className="inline-flex rounded-full border border-white/25 bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 shadow-sm">
                  Следен чекор
                </p>
                <h3 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
                  Спремен за првата трага?
                </h3>
                <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-white/82 sm:text-lg">
                  Избери буква, слушни ја и започни со првата бушава патека низ македонската азбука.
                </p>
                <button
                  type="button"
                  onClick={() => scrollToSection("tracing")}
                  className="mt-8 inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-base font-extrabold text-[#123E74] shadow-[0_20px_40px_rgba(0,0,0,0.16)] transition-transform hover:-translate-y-1"
                >
                  Оди на играта
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </section>
        </div>

        <footer className="px-5 pb-10 pt-2 sm:px-8 lg:px-[140px] lg:pr-[140px]">
          <div className="rounded-[2rem] border border-white/70 bg-white/72 px-6 py-5 shadow-[0_20px_50px_rgba(37,41,70,0.08)] backdrop-blur-xl">
            <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <Link to="/" className="inline-flex items-center justify-center gap-3 sm:justify-start">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-[16px] bg-white shadow-[0_12px_24px_rgba(37,41,70,0.10)]">
                  <PawPrint className="h-5 w-5 text-[#FF6B35]" strokeWidth={2.3} />
                </span>
                <span className="font-display text-[1.5rem] font-extrabold leading-none tracking-[-0.03em]">
                  <span className="text-[#002B5B]">Бушава</span>{" "}
                  <span className="text-[#6A0F3D]">Трага</span>
                </span>
              </Link>

              <div className="text-sm font-bold text-[#5C6980]">
                <p>© 2026 Бушава Азбука</p>
                <p className="mt-1">Направено со многу боја, игра и бушави букви.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
