import instance from "./fetch";

export function getHitMovies(params) {
  return instance({
    url: "/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1886067",
    method: "GET",
    params,
    headers: {
      "X-Host" : "mall.film-ticket.film.list",
    },
  });
}

export function getListCinema(params) {
  return instance({
    url: "/gateway?cityId=110100&ticketFlag=1&k=7406159",
    method: "GET",
    params,
    headers: {
      "X-Host" : "mall.film-ticket.cinema.list",
    },
  });
}
