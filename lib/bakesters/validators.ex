defmodule Bakesters.Validators do
  @moduledoc """
  Custom validators for Ecto Changeset
  """

  @doc """
    Validates the format of a persons name. Allows for hyphens, dashes single quotes, commas and spaces. Maximum length of 40 characters.
  """
  def validate_name(changest, field, options \\ []) do
    Ecto.Changeset.validate_change(changest, field, fn _, name ->
      if name =~ ~r/^[A-z\s'\.\-,]{1,40}$/ do
        []
      else
        [{field, options[:message] || "Invalid name"}]
      end
    end)
  end

  def validate_phone_number(changest, field, options \\ []) do
    Ecto.Changeset.validate_change(changest, field, fn _, phone_number ->
      contains_only_valid_characters? = phone_number =~ ~r/^[\+\(\)\-\s\d]{4,50}$/

      number_of_digits =
        Regex.replace(~r/[^\d]/, phone_number, "")
        |> String.length()

      case contains_only_valid_characters? and number_of_digits <= 15 do
        true -> []
        false -> [{field, options[:message] || "Invalid phone number"}]
      end
    end)
  end
end
