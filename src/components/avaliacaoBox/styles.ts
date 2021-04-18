import styled from 'styled-components';

export const Container = styled.div`
    width:48%;
    height:260px;
    margin: 10px 0;

    h2{
        color: ${props=>props.theme.color.info};
    }
    background-color: ${props =>props.theme.color.secondary};
   // color: ${props=>props.theme.color.white};
    border-radius: 7px;
    padding:30px 20px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
`;
// export const SideLeft = styled.div``;
// export const LegendContainer = styled.div``;
// export const Legend=styled.div``;
// export const SideRight =styled.div``;