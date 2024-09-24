import LeftLayout from "@/components/MainLayout/LeftLayout";
import MiddleLayout from "@/components/MainLayout/MiddleLayout";
import RightLayout from "@/components/MainLayout/RightLayout";
import { Navbar } from "@/components/shared/Navbar/Navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative grid h-screen grid-cols-[repeat(24,_1fr)]  overflow-auto w-screen">
      <Navbar />

      <LeftLayout>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
        omnis aspernatur blanditiis exercitationem nobis aperiam, placeat,
        consequuntur architecto assumenda, perspiciatis animi libero facilis
        quas doloribus earum vero error ab odit. Nemo ex necessitatibus dolorum
        consectetur. Nemo quidem vitae, at quo officia cupiditate ipsum.
        Doloremque obcaecati consequuntur saepe blanditiis laborum repellendus
        odit illum fuga excepturi labore tempora repellat quae maiores
        dignissimos minima, dolore odio, maxime inventore fugit molestias optio
        asperiores in quis. Nesciunt repellendus, sapiente labore quisquam
        nulla, maxime eos nam dicta modi doloremque ipsa voluptas alias
        excepturi ipsam deleniti vero ipsum, nihil quas vel perferendis odit ea.
        Fugiat ipsa incidunt molestiae labore vero ipsam asperiores a inventore
        quasi illo voluptates, hic repellendus quia ratione necessitatibus nemo
        excepturi quaerat cumque eveniet cupiditate nisi qui adipisci culpa
        dolore. Officia nostrum at consequatur, repellendus cum quisquam
        suscipit, error in sint aliquam architecto laborum voluptate, esse modi
        rerum. Omnis amet quae optio autem qui. Molestias voluptate iusto fuga
        voluptates eius, commodi suscipit exercitationem, nostrum consectetur
        quidem tempora magni recusandae est laudantium eligendi in deserunt
        laboriosam, repudiandae dolorem aliquid debitis voluptas iste ipsa quae.
        Fugiat qui quidem consequuntur consectetur, error quaerat, sunt
        reprehenderit obcaecati nulla, blanditiis quos eligendi voluptatibus
        unde? Facere expedita quisquam esse fuga, aspernatur natus distinctio
        impedit suscipit laudantium, perspiciatis minima quibusdam delectus
        vitae vel corrupti assumenda tenetur adipisci corporis! Ipsa, accusamus.
        Commodi culpa accusantium dignissimos et. Deleniti, aut. Et incidunt
        commodi quasi iste! Nisi rerum voluptatem necessitatibus recusandae,
        sapiente vero omnis suscipit dolor itaque sequi, repellat facilis, est
        quidem quibusdam ab esse consectetur fugiat nihil autem? Nesciunt
        excepturi impedit voluptates id optio voluptas alias aperiam,
        necessitatibus dicta veritatis ea a consectetur? Cum quos in repudiandae
        sint voluptates unde sapiente laborum accusamus, magni reprehenderit
        modi assumenda sunt odio id aspernatur ea, commodi velit necessitatibus
        ratione voluptate nobis? Quam ab voluptatibus tenetur ducimus veniam
        nostrum ratione, ullam dicta autem asperiores consectetur tempore
        aperiam, blanditiis voluptate eos quia at aliquid! Architecto nulla
        fugit aperiam vitae doloribus magni aspernatur, adipisci at nesciunt
        autem harum praesentium repellendus exercitationem ea fugiat obcaecati
        quia quam! Eligendi, velit. Nulla quod magnam a non voluptate
        praesentium enim perspiciatis maxime hic nostrum, amet cumque animi
        aperiam rerum voluptatibus ratione porro? Corrupti nam quaerat
        cupiditate harum ea impedit itaque minima fugiat, mollitia maiores quae
        qui possimus eaque neque alias numquam atque recusandae quibusdam in ut
        ratione! Ab sed inventore expedita, veniam mollitia, eos debitis soluta
        itaque laborum animi totam, in voluptates quam laudantium recusandae non
        ducimus tempore sit est! Ea omnis, blanditiis architecto quas porro
        fugiat tenetur. Ad fuga doloribus possimus harum incidunt modi enim
        nesciunt id, vero vitae sunt, eligendi quasi a sequi omnis, officia
        distinctio iure nam beatae eos? Earum, assumenda. Saepe, itaque. Qui
        minima enim facilis. Hic ex reiciendis cum porro totam consequuntur
        iure, voluptates ad temporibus placeat reprehenderit. Accusantium,
        itaque sequi consectetur nisi nostrum nesciunt quo in libero! Iure
        aspernatur dicta, placeat ipsam dolorum sapiente rerum sit atque ad nisi
        modi numquam temporibus pariatur accusamus harum, vero officiis libero
        inventore, tempora itaque? Tempore quos culpa porro odio dolore modi.
      </LeftLayout>
      <div className="col-span-2"></div>
      <MiddleLayout> {children}</MiddleLayout>
      <div className="col-span-2"></div>
      <RightLayout>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
        omnis aspernatur blanditiis exercitationem nobis aperiam, placeat,
        consequuntur architecto assumenda, perspiciatis animi libero facilis
        quas doloribus earum vero error ab odit. Nemo ex necessitatibus dolorum
        consectetur. Nemo quidem vitae, at quo officia cupiditate ipsum.
        Doloremque obcaecati consequuntur saepe blanditiis laborum repellendus
        odit illum fuga excepturi labore tempora repellat quae maiores
        dignissimos minima, dolore odio, maxime inventore fugit molestias optio
        asperiores in quis. Nesciunt repellendus, sapiente labore quisquam
        nulla, maxime eos nam dicta modi doloremque ipsa voluptas alias
        excepturi ipsam deleniti vero ipsum, nihil quas vel perferendis odit ea.
        Fugiat ipsa incidunt molestiae labore vero ipsam asperiores a inventore
        quasi illo voluptates, hic repellendus quia ratione necessitatibus nemo
        excepturi quaerat cumque eveniet cupiditate nisi qui adipisci culpa
        dolore. Officia nostrum at consequatur, repellendus cum quisquam
        suscipit, error in sint aliquam architecto laborum voluptate, esse modi
        rerum. Omnis amet quae optio autem qui. Molestias voluptate iusto fuga
        voluptates eius, commodi suscipit exercitationem, nostrum consectetur
        quidem tempora magni recusandae est laudantium eligendi in deserunt
        laboriosam, repudiandae dolorem aliquid debitis voluptas iste ipsa quae.
        Fugiat qui quidem consequuntur consectetur, error quaerat, sunt
        reprehenderit obcaecati nulla, blanditiis quos eligendi voluptatibus
        unde? Facere expedita quisquam esse fuga, aspernatur natus distinctio
        impedit suscipit laudantium, perspiciatis minima quibusdam delectus
        vitae vel corrupti assumenda tenetur adipisci corporis! Ipsa, accusamus.
        Commodi culpa accusantium dignissimos et. Deleniti, aut. Et incidunt
        commodi quasi iste! Nisi rerum voluptatem necessitatibus recusandae,
        sapiente vero omnis suscipit dolor itaque sequi, repellat facilis, est
        quidem quibusdam ab esse consectetur fugiat nihil autem? Nesciunt
        excepturi impedit voluptates id optio voluptas alias aperiam,
        necessitatibus dicta veritatis ea a consectetur? Cum quos in repudiandae
        sint voluptates unde sapiente laborum accusamus, magni reprehenderit
        modi assumenda sunt odio id aspernatur ea, commodi velit necessitatibus
        ratione voluptate nobis? Quam ab voluptatibus tenetur ducimus veniam
        nostrum ratione, ullam dicta autem asperiores consectetur tempore
        aperiam, blanditiis voluptate eos quia at aliquid! Architecto nulla
        fugit aperiam vitae doloribus magni aspernatur, adipisci at nesciunt
        autem harum praesentium repellendus exercitationem ea fugiat obcaecati
        quia quam! Eligendi, velit. Nulla quod magnam a non voluptate
        praesentium enim perspiciatis maxime hic nostrum, amet cumque animi
        aperiam rerum voluptatibus ratione porro? Corrupti nam quaerat
        cupiditate harum ea impedit itaque minima fugiat, mollitia maiores quae
        qui possimus eaque neque alias numquam atque recusandae quibusdam in ut
        ratione! Ab sed inventore expedita, veniam mollitia, eos debitis soluta
        itaque laborum animi totam, in voluptates quam laudantium recusandae non
        ducimus tempore sit est! Ea omnis, blanditiis architecto quas porro
        fugiat tenetur. Ad fuga doloribus possimus harum incidunt modi enim
        nesciunt id, vero vitae sunt, eligendi quasi a sequi omnis, officia
        distinctio iure nam beatae eos? Earum, assumenda. Saepe, itaque. Qui
        minima enim facilis. Hic ex reiciendis cum porro totam consequuntur
        iure, voluptates ad temporibus placeat reprehenderit. Accusantium,
        itaque sequi consectetur nisi nostrum nesciunt quo in libero! Iure
        aspernatur dicta, placeat ipsam dolorum sapiente rerum sit atque ad nisi
        modi numquam temporibus pariatur accusamus harum, vero officiis libero
        inventore, tempora itaque? Tempore quos culpa porro odio dolore modi.
      </RightLayout>
    </div>
  );
};

export default layout;
