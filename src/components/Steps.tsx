"use client";
import { useEffect, useState } from "react";
import {
  Stepper,
  Button,
  Group,
  TextInput,
  PasswordInput,
  Code,
  NumberInput,
  Select,
  Box,
  Title,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Symptoms from "./Symptoms";
import Link from "next/link";

export default function Steps() {
  const [selectedValue, setSelectedValue] = useState<string[]>([]);
  const [joinedValue, setJoinedValue] = useState("");
  const [checked, setChecked] = useState(false);
  const [result, setResult] = useState("");
  useEffect(() => {
    setJoinedValue(selectedValue.join("").replace(/\s+/g, ""));
    // alert(joinedValue);
  }, [selectedValue]);
  useEffect(() => {
    // setJoinedValue(selectedValue.join(""));
    // alert(joinedValue);
  }, [joinedValue]);

  const [active, setActive] = useState(0);
  const [gender, setGender] = useState<string | null>("");
  const [name, setName] = useState("");

  const nextStep = () => {
    if (active == 1) {
      if (
        joinedValue ==
        "ChillsFatigueFeverHeadacheormuscleachesMouthulcersNightsweatsRashSorethroatSwollenlymphglands"
      ) {
        setResult("You are HIV positive");
      } else {
        if (
          joinedValue ==
            "ChillsDiarrheaFatigueFeverHeadacheormuscleachesMouthulcersNightsweatsRashSorethroatSwollenlymphglands" ||
          joinedValue ==
            "ChillsCoughandshortnessofbreathDiarrheaFatigueFeverHeadacheormuscleachesMouthulcersNightsweatsRashSorethroatSwollenlymphglands" ||
          joinedValue ==
            "ChillsCoughandshortnessofbreathDiarrheaFatigueFeverHeadacheormuscleachesMouthulcersNightsweatsRashSorethroatSwollenlymphglandsWeightloss" ||
          joinedValue ==
            "ChillsDiarrheaFatigueFeverHeadacheormuscleachesMouthulcersNightsweatsRashSorethroatSwollenlymphglandsWeightloss" ||
          joinedValue ==
            "ChillsFatigueFeverHeadacheormuscleachesMouthulcersNightsweatsRashSorethroatSwollenlymphglandsWeightloss" ||
          joinedValue ==
            "ChillsCoughandshortnessofbreathFatigueFeverHeadacheormuscleachesMouthulcersNightsweatsRashSorethroatSwollenlymphglands" ||
          joinedValue ==
            "ChillsCoughandshortnessofbreathFatigueFeverHeadacheormuscleachesMouthulcersNightsweatsRashSorethroatSwollenlymphglandsWeightloss" //CW
        ) {
          setResult("You are having Chronic HIV");
        } else {
          if (
            joinedValue ==
            "DepressionDiarrheaExtremetirednessFeverInfectionssuchaspneumoniaMemorylossNightsweatsSorethroatWeaknessWeightloss"
          ) {
            setResult("You are having AIDS");
          } else {
            setResult("You are not having HIV or AIDS");
          }
        }
      }

      setSelectedValue([]);
    }
    setActive((current) => (current < 2 ? current + 1 : current));
  };
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const processResult = () => {};

  return (
    <Box my="xl">
      <Stepper active={active} my="xl">
        <Stepper.Step label="First step" description="Information">
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            p="xl"
          >
            <Box maw={300}>
              <TextInput
                size="lg"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                label="Name"
                placeholder="Enter your Name"
              />
              <Select
                size="lg"
                label="Gender"
                placeholder="Select your gender"
                data={["Male", "Female"]}
                value={gender}
                onChange={setGender}
              />
            </Box>
          </Box>
        </Stepper.Step>

        <Stepper.Step label="Second step" description="Diagnosis">
          <Title fz="xl" ta="center" mt="lg" c={"green"}>
            Please select all the symptoms you are having
          </Title>
          <Symptoms
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
        </Stepper.Step>
        <Stepper.Completed>
          <Text ta="center" fz="lg">
            Hello{" "}
            {gender == "Male" ? " Mr. " : gender == "Female" ? " Mrs. " : " "}
            {name}
          </Text>
          <Text mb="xl" ta={"center"} fz="xl">
            {result}
          </Text>
          <Box
            mt="xl"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Link href={"/diagnose"}>
              <Button>Diagnose Again</Button>
            </Link> */}
            <Link href={"/"}>
              <Button size="md">Home Page</Button>
            </Link>
          </Box>
        </Stepper.Completed>
        {/* <Stepper.Completed>Completed! Form values:</Stepper.Completed> */}
      </Stepper>

      <Group justify="space-between" mt="xl">
        {active !== 0 && active < 2 && (
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
        )}
        {active !== 2 && <Button onClick={nextStep}>Next step</Button>}
      </Group>
    </Box>
  );
}
