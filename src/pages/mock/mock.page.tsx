import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { Loader } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchMockTodoes } from "../../store/mock/mock.actions";
import { MockCard } from "./mockCard";

const MockPage = () => {
   const dispatch = useAppDispatch();
   const { loading, todoes } = useAppSelector((state) => state.mock);

   useEffect(() => {
      dispatch(fetchMockTodoes());
   }, [dispatch]);

   if (loading) return <Loader />;

   return (
      <Box p="1rem" w="100%">
         {todoes.map(({ id, ...mockCardProps }) => (
            <MockCard key={id} {...mockCardProps} />
         ))}
      </Box>
   );
};

export default MockPage;
