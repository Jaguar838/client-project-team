import styled from 'styled-components';
import EditIcon from '@material-ui/icons/Edit';

export const BtnEdit = styled(EditIcon)`
  color: #24cca7;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    opacity: 1;
    transform: scale(1.2)
  }
`;