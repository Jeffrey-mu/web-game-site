export function groupGamesByType(games: any) {
  return games.reduce((result: any, game: any) => {
    const type = game.type || 'unknown'; // 如果没有 type 属性，将其分为 unknown
    if (!result[type]) {
      result[type] = [];
    }
    result[type].push(game);
    return result;
  }, {});
}
