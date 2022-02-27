module.exports = {
  pages: [
    null,
    {
      type: 'cover',
    },
    {
      type: 'image',
      image: 'sample001.png',
      cards: [
        { x: 0.1, y: 0.1, w: 0.15 },
        { x: 0.5, y: 0.9, w: 0.2 },
      ],
    },
    {
      type: 'video',
      video: 'https://www.youtube.com/embed/SVVGD3XM9So',
      cards: [
        { x: 0.1, y: 0.1, w: 0.15 },
        { x: 0.85, y: 0.2, w: 0.1 },
        { x: 0.5, y: 0.9, w: 0.2 },
      ],
    },
    {
      type: 'image',
      image: 'sample002.png',
      cards: [
        { x: 0.1, y: 0.1, w: 0.15 },
        { x: 0.5, y: 0.9, w: 0.2 },
      ],
    },
    {
      type: 'game',
      chapter: 1,
      cards: [],
    },
    {
      type: 'credits',
    },
  ],
};
