// store.js
import { createGlobalState, useStorage } from '@vueuse/core';

export const useGlobalState = createGlobalState(() =>
  useStorage('state', [
    {
      title: 'windows 10',
      titleColor: 'text-success',
      id: 0,
      progressColor: 'progress-success',
      btnColor: 'btn-success',
      value: 0,
      prosent: 0,
      howManyClicked: 0,
    },
    {
      title: 'windows 11',
      titleColor: 'text-info',
      id: 1,
      progressColor: 'progress-info',
      btnColor: 'btn-info',
      value: 0,
      prosent: 0,
      howManyClicked: 0,
    },
    {
      title: 'mac os',
      titleColor: 'text-warning',
      id: 2,
      progressColor: 'progress-warning',
      btnColor: 'btn-warning',
      value: 0,
      prosent: 0,
      howManyClicked: 0,
    },
    {
      title: 'linux',
      titleColor: 'text-error',
      id: 3,
      progressColor: 'progress-error',
      btnColor: 'btn-error',
      value: 0,
      prosent: 0,
      howManyClicked: 0,
    },
  ])
);
