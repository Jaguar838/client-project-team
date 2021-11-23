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
    // backdropFilter: 'blur(50px)',
  }),
  control: () => ({
    '@media screen and (min-width: 320px)': {
      width: 280,
    },
    '@media screen and (min-width: 768px)': {
      width: 166,
    },
    height: 50,
  }),

  valueContainer: provided => ({
    ...provided,

    paddingLeft: 30,
    paddingTop: 10,
    // '@media screen and (max-width: 767px)': {
    //   maxHeight: 72,
    // },
    // maxHeight: 35,
  }),
  indicatorsContainer: () => ({
    display: 'none',
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: 'inherit',

    // backdropFilter: 'blur(70px)',
    borderRadius: 20,
    boxShadow: 'none',
  }),
  placeholder: provided => ({
    ...provided,
    color: '#000000',
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

    background: 'rgba(255, 255, 255, 0.6)',

    borderRadius: 20,
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
  }),
  container: provided => ({
    ...provided,
    border: '1px solid #000000',
    borderRadius: 30,

    cursor: 'pointer',
    '&:hover': {
      borderColor: '#24CCA7',
    },
    '&:focus': {
      borderColor: '#24CCA7',
    },
  }),
  singleValue: provided => ({
    ...provided,
    color: '#000000',
    fontSize: 18,
    lineHeight: 1.44,
  }),
  input: provided => ({
    ...provided,
    fontSize: 18,
    lineHeight: 1.44,
    caretColor: 'transparent',
    // visibility: 'hidden',
  }),
};

export default customStyles;
