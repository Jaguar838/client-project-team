import styled from 'styled-components';
import EditIcon from '@material-ui/icons/Edit';

export const BtnEdit = styled(EditIcon)`
  color: #24cca7;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: scale(1.2)
  }
`;