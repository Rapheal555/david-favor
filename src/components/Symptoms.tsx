"use client";

import { Box, Checkbox, Title } from "@mantine/core";
import { useEffect, useState } from "react";

export default function Symptoms({
  selectedValue,
  setSelectedValue,
}: {
  selectedValue: any;
  setSelectedValue: any;
}) {
  return (
    <Box m="xl" style={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <Checkbox
          onChange={(e) => {
            if (e.target.checked == true) {
              setSelectedValue((prevItems: any) => [...prevItems, "Fever"]);
            } else {
              setSelectedValue((prevItems: any) =>
                prevItems.filter((item: any) => item !== "Fever")
              );
            }
          }}
          label="Fever"
          size="lg"
          m="md"
        />
        <Checkbox
          onChange={(e) => {
            if (e.target.checked == true) {
              setSelectedValue((prevItems: any) => [...prevItems, "Chills"]);
            } else {
              setSelectedValue((prevItems: any) =>
                prevItems.filter((item: any) => item !== "Chills")
              );
            }
          }}
          label="Chills"
          size="lg"
          m="md"
        />
        <Checkbox
          onChange={(e) => {
            if (e.target.checked == true) {
              setSelectedValue((prevItems: any) => [
                ...prevItems,
                "Headache or muscle aches",
              ]);
            } else {
              setSelectedValue((prevItems: any) =>
                prevItems.filter(
                  (item: any) => item !== "Headache or muscle aches"
                )
              );
            }
          }}
          label="Headache or muscle aches"
          size="lg"
          m="md"
        />
        <Checkbox
          onChange={(e) => {
            if (e.target.checked == true) {
              setSelectedValue((prevItems: any) => [
                ...prevItems,
                "Sore throat",
              ]);
            } else {
              setSelectedValue((prevItems: any) =>
                prevItems.filter((item: any) => item !== "Sore throat")
              );
            }
          }}
          label="Sore throat"
          size="lg"
          m="md"
        />
        <Checkbox
          onChange={(e) => {
            if (e.target.checked == true) {
              setSelectedValue((prevItems: any) => [
                ...prevItems,
                "Swollen lymph glands",
              ]);
            } else {
              setSelectedValue((prevItems: any) =>
                prevItems.filter((item: any) => item !== "Swollen lymph glands")
              );
            }
          }}
          label="Swollen lymph glands"
          size="lg"
          m="md"
        />
        <Checkbox
          onChange={(e) => {
            if (e.target.checked == true) {
              setSelectedValue((prevItems: any) => [...prevItems, "Rash"]);
            } else {
              setSelectedValue((prevItems: any) =>
                prevItems.filter((item: any) => item !== "Rash")
              );
            }
          }}
          label="Rash"
          size="lg"
          m="md"
        />
        <Checkbox
          onChange={(e) => {
            if (e.target.checked == true) {
              setSelectedValue((prevItems: any) => [...prevItems, "Fatigue"]);
            } else {
              setSelectedValue((prevItems: any) =>
                prevItems.filter((item: any) => item !== "Fatigue")
              );
            }
          }}
          label="Fatigue"
          size="lg"
          m="md"
        />
        <Checkbox
          onChange={(e) => {
            if (e.target.checked == true) {
              setSelectedValue((prevItems: any) => [
                ...prevItems,
                "Night sweats",
              ]);
            } else {
              setSelectedValue((prevItems: any) =>
                prevItems.filter((item: any) => item !== "Night sweats")
              );
            }
          }}
          label="Night sweats"
          size="lg"
          m="md"
        />
        <Checkbox
          onChange={(e) => {
            if (e.target.checked == true) {
              setSelectedValue((prevItems: any) => [
                ...prevItems,
                "Mouth ulcers",
              ]);
            } else {
              setSelectedValue((prevItems: any) =>
                prevItems.filter((item: any) => item !== "Mouth ulcers")
              );
            }
          }}
          label="Mouth ulcers"
          size="lg"
          m="md"
        />
        <Checkbox
          onChange={(e) => {
            if (e.target.checked == true) {
              setSelectedValue((prevItems: any) => [...prevItems, "Diarrhea"]);
            } else {
              setSelectedValue((prevItems: any) =>
                prevItems.filter((item: any) => item !== "Diarrhea")
              );
            }
          }}
          label="Diarrhea"
          size="lg"
          m="md"
        />
        <Checkbox
          onChange={(e) => {
            if (e.target.checked == true) {
              setSelectedValue((prevItems: any) => [
                ...prevItems,
                "Weight loss",
              ]);
            } else {
              setSelectedValue((prevItems: any) =>
                prevItems.filter((item: any) => item !== "Weight loss")
              );
            }
          }}
          label="Weight loss"
          size="lg"
          m="md"
        />
        <Checkbox
          onChange={(e) => {
            if (e.target.checked == true) {
              setSelectedValue((prevItems: any) => [
                ...prevItems,
                "Cough and shortness of breath",
              ]);
            } else {
              setSelectedValue((prevItems: any) =>
                prevItems.filter(
                  (item: any) => item !== "Cough and shortness of breath"
                )
              );
            }
          }}
          label="Cough and shortness of breath"
          size="lg"
          m="md"
        />
        <Checkbox
          onChange={(e) => {
            if (e.target.checked == true) {
              setSelectedValue((prevItems: any) => [...prevItems, "Weakness"]);
            } else {
              setSelectedValue((prevItems: any) =>
                prevItems.filter((item: any) => item !== "Weakness")
              );
            }
          }}
          label="Weakness"
          size="lg"
          m="md"
        />
        <Checkbox
          onChange={(e) => {
            if (e.target.checked == true) {
              setSelectedValue((prevItems: any) => [
                ...prevItems,
                "Extreme tiredness",
              ]);
            } else {
              setSelectedValue((prevItems: any) =>
                prevItems.filter((item: any) => item !== "Extreme tiredness")
              );
            }
          }}
          label="Extreme tiredness"
          size="lg"
          m="md"
        />
        <Checkbox
          onChange={(e) => {
            if (e.target.checked == true) {
              setSelectedValue((prevItems: any) => [
                ...prevItems,
                "Memory loss",
              ]);
            } else {
              setSelectedValue((prevItems: any) =>
                prevItems.filter((item: any) => item !== "Memory loss")
              );
            }
          }}
          label="Memory loss"
          size="lg"
          m="md"
        />
        <Checkbox
          onChange={(e) => {
            if (e.target.checked == true) {
              setSelectedValue((prevItems: any) => [
                ...prevItems,
                "Depression",
              ]);
            } else {
              setSelectedValue((prevItems: any) =>
                prevItems.filter((item: any) => item !== "Depression")
              );
            }
          }}
          label="Depression"
          size="lg"
          m="md"
        />
        <Checkbox
          onChange={(e) => {
            if (e.target.checked == true) {
              setSelectedValue((prevItems: any) => [
                ...prevItems,
                "Infections such as pneumonia",
              ]);
            } else {
              setSelectedValue((prevItems: any) =>
                prevItems.filter(
                  (item: any) => item !== "Infections such as pneumonia"
                )
              );
            }
          }}
          label="Infections such as pneumonia"
          size="lg"
          m="md"
        />
        {selectedValue!.sort().map((val: any) => {
          console.log(selectedValue);
          return null;
        })}
        {/* <h1>{selectedValue}</h1> */}
      </Box>
      {/* HIV symptoms can include:

        Fever.
        Chills.
        Headache or muscle aches.
        Sore throat.
        Swollen lymph glands.
        Rash.
        Fatigue.
        Night sweats.
        Mouth ulcers. */}

      {/* Chronic HIV include:
        //Swollen lymph nodes, which are often one of the first signs of HIV infection.
        //Fever.
        Diarrhea.
        Weight loss.
        Cough and shortness of breath. */}

      {/* Aids symptoms
        //Fever.
        Weakness.
        //Fast weight loss.
        Extreme tiredness.
        //Soaking night sweats.
        Fever that keeps coming back.
        //Ongoing swelling of lymph nodes in the armpits, groin and neck.
        //Diarrhea that lasts longer than a week.
        //Sores in the mouth, anus or on the genitals. Discolored blotches on or under the skin, or inside the eyelids, nose or mouth.
        Memory loss.
        Depression.
        Infections such as pneumonia. */}
    </Box>
  );
}
