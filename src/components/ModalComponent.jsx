"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const ModalComponent = ({ sourceScript, targetScript }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("inside");

  return (
    <div>
      <Button onPress={onOpen} className="rounded-lg bg-sky-400 text-white">
        Preview Changes
      </Button>
      <Modal scrollBehavior={scrollBehavior} size="full" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Comparison Preview
              </ModalHeader>
              <ModalBody className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Source Scripts</h3>
                  {sourceScript?.data?.length > 0 ? (
                    sourceScript.data.map((script, index) => (
                      <div
                        key={`source-${index}`}
                        className="bg-gray-100 p-3 rounded-lg"
                      >
                        <p className="text-sm text-gray-500">
                          {sourceScript.type || "N/A"}
                        </p>
                        <pre className="font-mono text-sm leading-relaxed">
                          {script.data || "No data available"}
                        </pre>
                      </div>
                    ))
                  ) : (
                    <p>No Source Scripts Available</p>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Target Scripts</h3>
                  {targetScript?.data?.length > 0 ? (
                    targetScript.data.map((script, index) => (
                      <div
                        key={`target-${index}`}
                        className="bg-gray-100 p-3 rounded-lg"
                      >
                        <p className="text-sm text-gray-500">
                          {targetScript.type || "N/A"}
                        </p>
                        <pre className="font-mono text-sm leading-relaxed">
                          {script.data || "No data available"}
                        </pre>
                      </div>
                    ))
                  ) : (
                    <p>No Target Scripts Available</p>
                  )}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Confirm Changes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalComponent;
