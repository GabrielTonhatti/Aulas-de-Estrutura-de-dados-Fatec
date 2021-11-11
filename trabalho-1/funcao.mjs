export function fnComparacao(obj1, obj2) {

    if (obj1.id_documento === obj2.id_documento) {

        if (obj1.partido === obj2.partido) {

            return obj1.nome_parlamentar > obj2.nome_parlamentar

        } else {

            return obj1.partido > obj2.partido;
        }
    } else {

        return obj1.id_documento > obj2.id_documento;
        
    }
}