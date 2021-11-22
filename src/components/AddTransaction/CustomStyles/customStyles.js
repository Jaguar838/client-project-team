const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected || state.isFocused ? '#FF6596' : '#000000',
    backgroundColor:
      state.isSelected || state.isFocused ? '#FFFFFF' : 'inherit',
    paddingLeft: 20,
    paddingTop: 13,
    height: 44,
    border: 'none',
    cursor: 'pointer',
  }),
  control: () => ({
    '@media screen and (min-width: 320px)': {
      width: 280,
    },
    '@media screen and (min-width: 768px)': {
      width: 542,
    },
    height: 34,
  }),

  valueContainer: provided => ({
    ...provided,
    paddingLeft: 20,
    paddingBottom: 10,
    maxHeight: 34,
  }),
  indicatorsContainer: () => ({
    display: 'none',
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: 'inherit',

    borderRadius: 20,
    boxShadow: 'none',
  }),
  placeholder: provided => ({
    ...provided,
    color: '#BDBDBD',
    fontSize: 18,
    lineHeight: 1.44,
  }),
  menuList: provided => ({
    ...provided,
    '@media screen and (min-width: 320px)': {
      maxHeight: 352,
    },
    '@media screen and (min-width: 768px)': {
      maxHeight: 411,
    },
    padding: 0,

    backdropFilter: 'blur(50px)',
    borderRadius: 20,
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
  }),
  container: provided => ({
    ...provided,
    borderBottom: '1px solid #E0E0E0',
    cursor: 'pointer',
    '&:hover': {
      borderColor: '#24CCA7',
    },
    '&:focus': {
      borderColor: '#24CCA7',
    },
  }),
};

export default customStyles;
