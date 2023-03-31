import {
  Card,
  CardBody,
  CardHeader,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import lti from "../assets/lti.png";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="flex h-full justify-center items-center relative ">
      <p className="absolute top-10 text-lg md:text-3xl font-bold justify-center font-mono uppercase tracking-[15px]">
        Experience
      </p>
      <Card
        variant="outline"
        borderColor="#f64c72"
        bgColor="#242582"
        borderWidth="3px"
        maxW="60vw"
        className="rounded-2xl"
      >
        <CardBody className="flex flex-col items-center justify-center p-4">
          <motion.img
            src={lti}
            className="h-20  md:h-40 rounded-lg"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: -30, opacity: 0 }}
            transition={{ duration: 1 }}
          />
          <Text className="my-3 font-semibold text-md md:text-xl">
            Aug 2021 - Present
          </Text>
          <UnorderedList className="self-start pl-2 pb-1 text-sm md:text-lg font-sans">
            <ListItem>
              Enhancing overall user experience of the product
            </ListItem>
            <ListItem>Part of client delivery team</ListItem>
            <ListItem>Ensure smooth delivery</ListItem>
            <ListItem>Understanding and implementing client needs</ListItem>
            <ListItem>Built an IAM for the client</ListItem>
          </UnorderedList>
        </CardBody>
      </Card>
    </div>
  );
};

export default Experience;
