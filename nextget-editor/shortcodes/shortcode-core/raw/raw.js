window.nextgenEditor.addShortcode('raw', {
  type: 'block',
  title: 'Raw',
  button: {
    group: 'shortcode-core',
    label: 'Raw',
  },
  content({ writer, container }) {
    const div = writer.createElement('div');
    writer.append(div, container);

    return div;
  },
});