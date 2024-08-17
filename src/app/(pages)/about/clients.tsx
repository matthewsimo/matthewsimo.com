const ClientsList = () => {
  const clientClass =
    "aspect-video block py-8 bg-gradient-to-br from-main-700 to-main-800/70 rounded-sm transition-all hover:scale-105 hover:shadow-md";
  const clients = [
    "AMC Networks",
    "Breaking Bad",
    "Walking Dead",
    "Mad Men",
    "Discovery Channel",
    "Shark Week",
    "DiscoveryVR",
    "Project CAT",
    "Redbox",
    "JP Morgan Chase",
    "Abbott",
    "Etrade",
  ];

  return (
    <ul
      className={`grid grid-cols-2 md:grid-cols-4 gap-4 text-center overflow-visible`}
    >
      {clients.map((client) => (
        <li
          key={client.toLowerCase().split(" ").join("-")}
          className={clientClass}
        >
          {client}
        </li>
      ))}
    </ul>
  );
};

ClientsList.displayName = "ClientsList";

export default ClientsList;
