import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us";
  }, []);
  return (
    <>
      <div className="bg-custom-bg-color font-serif space-y-16 pb-12 text-custom-primary-color text-center">
        <header className="container  p-16 space-y-4 bg-amber-200 ">
          <h1 className="text-4xl font-bold">About SJSM</h1>
          <p className="w-4/5 mx-auto">
            St. Joseph’s School of Mactan is an institution of learning, owned
            and administered by the Franciscan Sisters of the Immaculate
            Conception of the Holy Mother of God, Philippine South Province
            (SFIC-PSP) as a non-stock, non-profit corporation. It is an integral
            part of the SFIC Educational Network System in the Philippines and
            an instrumentality of the SFIC-PSP.
          </p>
        </header>

        <div className="w-4/5 mx-auto space-y-8">
          <p>
            As a Catholic School it is at the service of the Church and the
            Earth Community as it provides excellent programs and services to
            form the youth to become God-loving, evangelizing, and responsible
            members of an Earth Community of just and lasting peace.
          </p>
          <p>
            As a Philippine School, it situates itself within the prevailing
            socio-eco-political, cultural, technological realities and
            relationships not only in the country but also within the Region and
            the world as a whole.
          </p>
          <p>
            As an SFIC–owned School, SJSM, continues the mission of its founder,
            Mother Teresia Van Miert, who “was deeply moved by the needs of the
            times in which she lived,” and “steeped in the Gospel and in the
            life of St. Francis, discovered ways to alleviate the sufferings of
            the people in her surroundings; there was no Catholic education;
            there was no adequate care for the sick and the aged; many were
            jobless, beggars and tramps. She led the Sisters of the Congregation
            in the task of teaching and in alleviating physical and social
            needs.
          </p>
          <p>
            As a member of the SFIC Educational Network System, it shares a
            common Vision, Mission and Core Values with the other member
            schools. Sharing of human resources and expertise, information,
            materials on the latest trends as well as issues affecting the
            schools are regularly done among the member schools. The membership
            of the school corporations concerned meets annually to deepen ties
            among themselves, give school updates and for formation purposes.
          </p>
        </div>
      </div>
    </>
  );
}
