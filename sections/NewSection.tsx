interface Props {
  /**
   * @description The name to be displayed in the greeting.
   */
  name?: string;
  /**
   * @description A brief description to be shown below the greeting.
   * @format textarea
   */
  description?: string;
}

export default function Section({ name = "Capy", description = "Welcome to our website!" }: Props) {
  return <div>
    <h1 class="text-3xl font-bold">Hello {name}</h1>
    <p class="mt-2">{description}</p>
  </div>
}