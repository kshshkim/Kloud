import { useQuery } from "react-query";
import styled from "styled-components";
import { getProphetTrend, getSimilarityTrend } from "../api";
import Loader from "../components/Loader";

const Container = styled.div``;
const Tmp = styled.span`
  font-size: 100px;
  color: white;
`;
const Trend = () => {
  const { isLoading: isSimilarityLoading, data: similarityTrend } =
    useQuery<any>("similarity", getSimilarityTrend);

  const { isLoading: isProphetLoading, data: prophetTrend } = useQuery<any>(
    "prophet",
    getProphetTrend
  );
  return (
    <>
      {isProphetLoading || isSimilarityLoading ? (
        <Loader />
      ) : (
        <Container>
          <Tmp>Trend</Tmp>
        </Container>
      )}
    </>
  );
};
export default Trend;
