"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

export const SignupForm = () => {
  const router = useRouter();
  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleEnterButton = () => {
    router.replace("/home");
  };
  return (
    <>
      <Input
        placeholder="Digite seu nome"
        value={nameField}
        onChange={(t) => setNameField(t)}
      />

      <Input
        placeholder="Digite seu email"
        value={emailField}
        onChange={(t) => setEmailField(t)}
      />

      <Input
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={(t) => setPasswordField(t)}
        password
      />

      <Button label="Criar Conta" onClick={handleEnterButton} size={1} />
    </>
  );
};
