import React from 'react';
import { useTheme } from 'styled-components';

const GHActionsLogo: React.FC = () => {
  const theme = useTheme();

  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_614_175)">
        <path
          d="M27.46 34.59C27.1291 34.5899 26.8118 34.4587 26.5775 34.225L24.715 32.3675C24.5955 32.2524 24.5 32.1146 24.4343 31.9622C24.3686 31.8097 24.3339 31.6458 24.3322 31.4798C24.3306 31.3138 24.362 31.1492 24.4246 30.9955C24.4872 30.8418 24.5798 30.7021 24.697 30.5846C24.8142 30.4671 24.9537 30.374 25.1072 30.311C25.2607 30.2479 25.4253 30.216 25.5912 30.2172C25.7572 30.2184 25.9213 30.2527 26.0739 30.318C26.2265 30.3833 26.3645 30.4783 26.48 30.5975L27.46 31.575L30.4125 28.625C30.6469 28.3903 30.9649 28.2583 31.2966 28.2581C31.6283 28.2578 31.9465 28.3894 32.1813 28.6238C32.416 28.8581 32.548 29.1762 32.5482 29.5079C32.5484 29.8396 32.4169 30.1578 32.1825 30.3925L28.345 34.225C28.1095 34.4584 27.7915 34.5895 27.46 34.59ZM50.8425 34.2225L54.6775 30.3925C54.9052 30.1567 55.0312 29.841 55.0283 29.5132C55.0255 29.1855 54.894 28.872 54.6623 28.6402C54.4305 28.4085 54.117 28.277 53.7893 28.2742C53.4615 28.2713 53.1458 28.3973 52.91 28.625L49.9575 31.575L48.9775 30.5975C48.862 30.4783 48.724 30.3833 48.5714 30.318C48.4188 30.2527 48.2547 30.2184 48.0887 30.2172C47.9228 30.216 47.7582 30.2479 47.6047 30.311C47.4512 30.374 47.3117 30.4671 47.1945 30.5846C47.0773 30.7021 46.9847 30.8418 46.9221 30.9955C46.8595 31.1492 46.8281 31.3138 46.8297 31.4798C46.8314 31.6458 46.8661 31.8097 46.9318 31.9622C46.9975 32.1146 47.093 32.2524 47.2125 32.3675L49.0775 34.225C49.1932 34.3414 49.3308 34.4337 49.4823 34.4966C49.6339 34.5596 49.7964 34.5918 49.9605 34.5916C50.1246 34.5914 50.2871 34.5586 50.4384 34.4953C50.5898 34.4319 50.7271 34.3392 50.8425 34.2225ZM11.3175 18.63L17.71 14.6675C18.0709 14.4442 18.369 14.1326 18.5763 13.7623C18.7835 13.3919 18.893 12.9748 18.8945 12.5504C18.896 12.126 18.7895 11.7082 18.5848 11.3363C18.3802 10.9645 18.0843 10.6509 17.725 10.425L11.3325 6.4C10.9543 6.16175 10.5191 6.02927 10.0723 6.01634C9.62553 6.0034 9.18343 6.1105 8.79208 6.32647C8.40073 6.54244 8.07444 6.85939 7.84719 7.2443C7.61994 7.62921 7.50005 8.06801 7.5 8.515V16.505C7.50074 16.9502 7.62024 17.3872 7.84619 17.7708C8.07213 18.1545 8.39633 18.4709 8.78535 18.6874C9.17437 18.904 9.61411 19.0128 10.0592 19.0027C10.5043 18.9926 10.9387 18.864 11.3175 18.63ZM16.3925 12.54L10 16.505V8.515L16.3925 12.54ZM60 31.25C60 36.075 56.075 40 51.25 40C49.1481 39.996 47.1178 39.2361 45.5297 37.8592C43.9417 36.4823 42.9018 34.5801 42.6 32.5H37.4C37.0982 34.5801 36.0583 36.4823 34.4703 37.8592C32.8822 39.2361 30.8519 39.996 28.75 40C26.648 39.9965 24.6174 39.2368 23.0292 37.8598C21.441 36.4828 20.4013 34.5803 20.1 32.5H18.705C16.275 32.5 14.08 31.5025 12.5 29.895V42.5C12.5 46.635 15.865 50 20 50H20.1C20.71 45.7675 24.35 42.5 28.75 42.5C33.575 42.5 37.5 46.425 37.5 51.25C37.5 56.075 33.575 60 28.75 60C26.648 59.9965 24.6174 59.2368 23.0292 57.8598C21.441 56.4828 20.4013 54.5803 20.1 52.5H20C14.485 52.5 10 48.015 10 42.5V24.7475C7.17874 24.1678 4.64362 22.6331 2.82202 20.4021C1.00042 18.171 0.00374288 15.3802 0 12.5C0 5.6075 5.6075 0 12.5 0C19.3925 0 25 5.6075 25 12.5C24.9956 15.7927 23.6935 18.9509 21.376 21.2899C19.0585 23.6289 15.9125 24.9601 12.62 24.995C12.8979 26.4048 13.6564 27.6744 14.7662 28.5872C15.8759 29.5 17.2681 29.9993 18.705 30H20.1C20.71 25.7675 24.35 22.5 28.75 22.5C30.852 22.5035 32.8826 23.2632 34.4708 24.6402C36.059 26.0172 37.0987 27.9197 37.4 30H42.6C42.9018 27.9199 43.9417 26.0177 45.5297 24.6408C47.1178 23.2639 49.1481 22.504 51.25 22.5C56.075 22.5 60 26.425 60 31.25ZM22.5 51.25C22.5 54.695 25.305 57.5 28.75 57.5C32.195 57.5 35 54.695 35 51.25C35 47.805 32.195 45 28.75 45C25.305 45 22.5 47.805 22.5 51.25ZM12.5 22.5C18.015 22.5 22.5 18.015 22.5 12.5C22.5 6.985 18.015 2.5 12.5 2.5C6.985 2.5 2.5 6.985 2.5 12.5C2.5 18.015 6.985 22.5 12.5 22.5ZM35 31.25C35 27.805 32.195 25 28.75 25C25.305 25 22.5 27.805 22.5 31.25C22.5 34.695 25.305 37.5 28.75 37.5C32.195 37.5 35 34.695 35 31.25ZM57.5 31.25C57.5 27.805 54.695 25 51.25 25C47.805 25 45 27.805 45 31.25C45 34.695 47.805 37.5 51.25 37.5C54.695 37.5 57.5 34.695 57.5 31.25ZM25 51.25C25 51.5815 25.1317 51.8995 25.3661 52.1339C25.6005 52.3683 25.9185 52.5 26.25 52.5C26.5815 52.5 26.8995 52.3683 27.1339 52.1339C27.3683 51.8995 27.5 51.5815 27.5 51.25C27.5 50.9185 27.3683 50.6005 27.1339 50.3661C26.8995 50.1317 26.5815 50 26.25 50C25.9185 50 25.6005 50.1317 25.3661 50.3661C25.1317 50.6005 25 50.9185 25 51.25ZM30 51.25C30 51.5815 30.1317 51.8995 30.3661 52.1339C30.6005 52.3683 30.9185 52.5 31.25 52.5C31.5815 52.5 31.8995 52.3683 32.1339 52.1339C32.3683 51.8995 32.5 51.5815 32.5 51.25C32.5 50.9185 32.3683 50.6005 32.1339 50.3661C31.8995 50.1317 31.5815 50 31.25 50C30.9185 50 30.6005 50.1317 30.3661 50.3661C30.1317 50.6005 30 50.9185 30 51.25ZM60 51.25C60 56.075 56.075 60 51.25 60C49.1474 59.9958 47.1165 59.2353 45.5283 57.8573C43.9401 56.4794 42.9007 54.576 42.6 52.495C42.5825 52.4975 42.5675 52.5075 42.5475 52.5075L41.2825 52.55H41.24C40.9176 52.5417 40.6109 52.4091 40.384 52.18C40.1571 51.9508 40.0275 51.6429 40.0223 51.3204C40.0172 50.998 40.1368 50.686 40.3563 50.4497C40.5758 50.2135 40.8781 50.0711 41.2 50.0525L42.465 50.01C42.51 50.005 42.5525 50.025 42.595 50.0275C42.8909 47.9415 43.9289 46.0322 45.5186 44.6496C47.1083 43.2669 49.1432 42.5038 51.25 42.5C56.075 42.5 60 46.425 60 51.25ZM57.5 51.25C57.5 47.805 54.695 45 51.25 45C47.805 45 45 47.805 45 51.25C45 54.695 47.805 57.5 51.25 57.5C54.695 57.5 57.5 54.695 57.5 51.25Z"
          fill={theme.mode === 'light' ? '#90A959' : '#F5E9E2'}
        />
      </g>
      <defs>
        <clipPath id="clip0_614_175">
          <rect width="60" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GHActionsLogo;
