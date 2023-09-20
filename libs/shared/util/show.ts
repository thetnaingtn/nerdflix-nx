import { Show } from '@nerdflix/shared/types';

export function getRandomShow(shows: Show[]) {
  const random = Math.floor(Math.random() * shows.length);
  let randomShow = shows[random];

  return randomShow;
}
