defmodule TysonDevopsIcApp.Repo do
  use Ecto.Repo,
    otp_app: :tyson_devops_ic_app,
    adapter: Ecto.Adapters.Postgres
end
