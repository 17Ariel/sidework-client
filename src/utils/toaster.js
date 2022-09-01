export const toaster = (toast, title, status) => {
  return toast({
    title,
    status,
    isClosable: true,
    duration: 1000,
    position: "top-center",
  });
};
